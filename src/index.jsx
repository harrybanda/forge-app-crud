import ForgeUI, { render, Fragment, Macro, useState } from "@forge/ui";
import { BooksTable } from "./BooksTable";
import { BookDialog } from "./BookDialog";

const App = () => {
  const [isOpenModal, setOpenModal] = useState(false);
  const [books, setBooks] = useState([]);

  return (
    <Fragment>
      <BooksTable books={books} setOpenModal={setOpenModal} />
      <BookDialog
        books={books}
        setBooks={setBooks}
        isOpenModal={isOpenModal}
        setOpenModal={setOpenModal}
      />
    </Fragment>
  );
};

export const run = render(<Macro app={<App />} />);
