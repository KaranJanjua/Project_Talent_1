import Axios from "axios";
import React from "react";
import { Button, Form, Modal } from "semantic-ui-react";

const Delete_ProductModal = (props) => {
  const { open, handelModal, Product } = props;

  const DeleteProduct = (Id, index) => {
    Axios.delete("/Products/DeleteProduct/ " + Id)
      .then((response) => {
        handelModal(false);
      })
      .catch((error) => {
           console.log(` Failed to delete `);
      });
  };

  if (Product) {
    return (
      <Modal open={open}>
        <Modal.Header>Delete Product</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Field>
              <label>Are you Sure?</label>
            </Form.Field>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button
            color="black"
            onClick={() => {
              return handelModal(false);
            }}
          >
            Cancel
          </Button>
          <Button color="red" onClick={() => DeleteProduct(Product.id)}>
            Delete
          </Button>
        </Modal.Actions>
      </Modal>
    );
  } else {
    return <div></div>;
  }
};

export default Delete_ProductModal;
