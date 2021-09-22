import ForgeUI, { render, Fragment, Macro, useState } from "@forge/ui";
import { BooksTable } from "./BooksTable";
import { BookDialog } from "./BookDialog";

const App = () => {
  const [isOpenModal, setOpenModal] = useState(false);
  return (
    <Fragment>
      <BooksTable isOpenModal={isOpenModal} setOpenModal={setOpenModal} />
      <BookDialog isOpenModal={isOpenModal} setOpenModal={setOpenModal} />
    </Fragment>
  );
};

export const run = render(<Macro app={<App />} />);
