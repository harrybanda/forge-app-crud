import ForgeUI, {
  Fragment,
  Text,
  Table,
  Head,
  Row,
  Cell,
  Button,
  ButtonSet,
  useState,
  useEffect,
} from "@forge/ui";
import { storage, startsWith } from "@forge/api";

export const BooksTable = ({
  isOpenModal,
  setOpenModal,
  setUpdating,
  setSelectedBook,
}) => {
  const [books, setBooks] = useState([]);

  useEffect(async () => {
    await storage
      .query()
      .where("key", startsWith("book_"))
      .getMany()
      .then((res) => setBooks(res.results));
  }, [isOpenModal]);

  return (
    <Fragment>
      <Button
        text="Add Book"
        icon="add-circle"
        onClick={() => {
          setOpenModal(true);
          setUpdating(false);
        }}
      />
      <Table>
        <Head>
          <Cell>
            <Text>Book Name</Text>
          </Cell>
          <Cell>
            <Text>Author</Text>
          </Cell>
          <Cell>
            <Text>Quantity</Text>
          </Cell>
          <Cell>
            <Text>Price</Text>
          </Cell>
          <Cell>
            <Text>Actions</Text>
          </Cell>
        </Head>
        {books.map((book) => (
          <Row>
            <Cell>
              <Text>{book.value.bookname}</Text>
            </Cell>
            <Cell>
              <Text>{book.value.author}</Text>
            </Cell>
            <Cell>
              <Text>{book.value.quantity}</Text>
            </Cell>
            <Cell>
              <Text>{book.value.price}</Text>
            </Cell>
            <Cell>
              <ButtonSet>
                <Button
                  text="Edit"
                  icon="edit"
                  onClick={() => {
                    setSelectedBook(book);
                    setUpdating(true);
                    setOpenModal(true);
                  }}
                />
                <Button
                  appearance="danger"
                  icon="trash"
                  onClick={async () => {
                    await storage.delete(book.key);
                    await storage
                      .query()
                      .where("key", startsWith("book_"))
                      .getMany()
                      .then((res) => setBooks(res.results));
                  }}
                />
              </ButtonSet>
            </Cell>
          </Row>
        ))}
      </Table>
    </Fragment>
  );
};
