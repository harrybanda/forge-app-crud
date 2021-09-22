import ForgeUI, { ModalDialog, Form, TextField } from "@forge/ui";
import { storage } from "@forge/api";
import uuid from "uuid-random";

export const BookDialog = ({ isOpenModal, setOpenModal }) => {
  const onSubmit = async (formData) => {
    const bookId = "book_" + uuid();
    await storage.set(bookId, formData);
    setOpenModal(false);
  };

  return (
    isOpenModal && (
      <ModalDialog header="Add Book" onClose={() => setOpenModal(false)}>
        <Form onSubmit={onSubmit}>
          <TextField name="bookname" label="Book Name" />
          <TextField name="author" label="Author" />
          <TextField name="quantity" label="Quantity" />
          <TextField name="price" label="Price" />
        </Form>
      </ModalDialog>
    )
  );
};
