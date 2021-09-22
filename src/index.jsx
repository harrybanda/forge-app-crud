import ForgeUI, { render, Fragment, Macro, useState } from "@forge/ui";
import { BooksTable } from "./BooksTable";
import { BookDialog } from "./BookDialog";

const App = () => {
  const [isOpenModal, setOpenModal] = useState(false);
  const [isUpdating, setUpdating] = useState(false);
  const [selectedBook, setSelectedBook] = useState(undefined);
  return (
    <Fragment>
      <BooksTable
        isOpenModal={isOpenModal}
        setOpenModal={setOpenModal}
        setUpdating={setUpdating}
        setSelectedBook={setSelectedBook}
      />
      <BookDialog
        isOpenModal={isOpenModal}
        setOpenModal={setOpenModal}
        isUpdating={isUpdating}
        selectedBook={selectedBook}
      />
    </Fragment>
  );
};

export const run = render(<Macro app={<App />} />);
