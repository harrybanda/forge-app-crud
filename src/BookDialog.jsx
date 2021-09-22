import ForgeUI, { ModalDialog, Form, TextField } from "@forge/ui";
import { storage } from "@forge/api";
import uuid from "uuid-random";

export const BookDialog = ({
  isOpenModal,
  setOpenModal,
  isUpdating,
  selectedBook,
}) => {
  const onSubmit = async (formData) => {
    let bookId;

    if (isUpdating) {
      bookId = selectedBook.key;
    } else {
      bookId = "book_" + uuid();
    }

    await storage.set(bookId, formData);
    setOpenModal(false);
  };

  return (
    isOpenModal && (
      <ModalDialog
        header={isUpdating ? "Update Book" : "Add Book"}
        onClose={() => setOpenModal(false)}
      >
        <Form onSubmit={onSubmit}>
          <TextField
            name="bookname"
            label="Book Name"
            defaultValue={isUpdating ? selectedBook.value.bookname : ""}
          />
          <TextField
            name="author"
            label="Author"
            defaultValue={isUpdating ? selectedBook.value.author : ""}
          />
          <TextField
            name="quantity"
            label="Quantity"
            defaultValue={isUpdating ? selectedBook.value.quantity : ""}
          />
          <TextField
            name="price"
            label="Price"
            defaultValue={isUpdating ? selectedBook.value.price : ""}
          />
        </Form>
      </ModalDialog>
    )
  );
};
