import ForgeUI, {
  Fragment,
  Text,
  Table,
  Head,
  Row,
  Cell,
  Button,
  ButtonSet,
} from "@forge/ui";

export const BooksTable = ({ books, setOpenModal }) => {
  return (
    <Fragment>
      <Button
        text="Add Book"
        icon="add-circle"
        onClick={() => setOpenModal(true)}
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
              <Text>{book.bookname}</Text>
            </Cell>
            <Cell>
              <Text>{book.author}</Text>
            </Cell>
            <Cell>
              <Text>{book.quantity}</Text>
            </Cell>
            <Cell>
              <Text>{book.price}</Text>
            </Cell>
            <Cell>
              <ButtonSet>
                <Button text="Edit" icon="edit" />
                <Button appearance="danger" icon="trash" />
              </ButtonSet>
            </Cell>
          </Row>
        ))}
      </Table>
    </Fragment>
  );
};
