import ForgeUI, { ModalDialog, Form, TextField } from "@forge/ui";

export const BookDialog = ({ books, setBooks, isOpenModal, setOpenModal }) => {
  const onSubmit = async (formData) => {
    setBooks([...books, formData]);
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
