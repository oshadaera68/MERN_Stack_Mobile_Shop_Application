import React, { useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import axios from "axios";

const Item = () => {
  const [itemCode, setItemCode] = useState("");
  const [itemName, setItemName] = useState("");
  const [itemQty, setItemQty] = useState("");
  const [itemUnitPrice, setItemUnitPrice] = useState("");
  const [errors, setErrors] = useState({});
  const [openAddSnackbar, setOpenAddSnackbar] = useState(false);
  const [openUpdateSnackbar, setOpenUpdateSnackbar] = useState(false);
  const [openDeleteSnackbar, setOpenDeleteSnackbar] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!itemCode.trim()) {
      validationErrors.itemCode = "Item Code is required.";
    }

    if (!itemName.trim()) {
      validationErrors.itemName = "Item Name is required.";
    }

    if (!itemQty.trim() || isNaN(itemQty)) {
      validationErrors.itemQty = "Item Quantity must be a number.";
    }

    if (!itemUnitPrice.trim() || isNaN(itemUnitPrice)) {
      validationErrors.itemUnitPrice = "Item Unit Price must be a number.";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const newItem = {
        itemId: itemCode,
        itemName,
        itemQty: Number(itemQty),
        itemPrice: Number(itemUnitPrice),
      };
      await axios.post("http://localhost:4001/item", newItem);
      setOpenAddSnackbar(true);

      setItemCode("");
      setItemName("");
      setItemQty("");
      setItemUnitPrice("");
      setErrors({});
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  const handleDelete = async () => {
    if (!itemCode) {
      return;
    }

    try {
      await axios.delete('http://localhost:4001/itemcode', {
        data: { itemCode },
      });
      setOpenDeleteSnackbar(true);

      setItemCode("");
      setItemName("");
      setItemQty("");
      setItemUnitPrice("");
      setErrors({});
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const handleUpdate = async () => {
    if (!itemCode) {
      return;
    }

    try {
      const updatedItem = {
        itemId: itemCode,
        itemName,
        itemQty: Number(itemQty),
        itemPrice: Number(itemUnitPrice),
      };

      await axios.put('http://localhost:4001/itemId', updatedItem);
      setOpenUpdateSnackbar(true);

      setItemCode("");
      setItemName("");
      setItemQty("");
      setItemUnitPrice("");
      setErrors({});
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  const handleCloseAddSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAddSnackbar(false);
  };

  const handleCloseDeleteSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenDeleteSnackbar(false);
  };

  const handleCloseUpdateSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenUpdateSnackbar(false);
  };

  return (
    <Container>
      <h1 className="text-center text-bg-dark text-2xl mt-4">Item Form</h1>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col>
            <Form.Label>Item Code</Form.Label>
            <Form.Control
              type="text"
              placeholder="Item Code"
              value={itemCode}
              onChange={(e) => setItemCode(e.target.value)}
              isInvalid={!!errors.itemCode}
            />
            <Form.Control.Feedback type="invalid">
              {errors.itemCode}
            </Form.Control.Feedback>
          </Col>
          <Col>
            <Form.Label>Item Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              isInvalid={!!errors.itemName}
            />
            <Form.Control.Feedback type="invalid">
              {errors.itemName}
            </Form.Control.Feedback>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Form.Label>Item Qty</Form.Label>
            <Form.Control
              type="text"
              placeholder="Qty"
              value={itemQty}
              onChange={(e) => setItemQty(e.target.value)}
              isInvalid={!!errors.itemQty}
            />
            <Form.Control.Feedback type="invalid">
              {errors.itemQty}
            </Form.Control.Feedback>
          </Col>
          <Col>
            <Form.Label>Item unitPrice</Form.Label>
            <Form.Control
              type="text"
              placeholder="Unit Price"
              value={itemUnitPrice}
              onChange={(e) => setItemUnitPrice(e.target.value)}
              isInvalid={!!errors.itemUnitPrice}
            />
            <Form.Control.Feedback type="invalid">
              {errors.itemUnitPrice}
            </Form.Control.Feedback>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              type="submit"
              className="text-black"
              variant="success"
              onClick={handleSubmit}
            >
              Add
            </Button>
            <Button
              variant="warning"
              className="left-2"
              disabled={!itemCode}
              onClick={handleUpdate}
            >
              Update
            </Button>
            <Button
              variant="danger"
              className="left-2"
              disabled={!itemCode}
              onClick={handleDelete}
            >
              Delete
            </Button>
          </Col>
        </Row>
      </Form>

      <Snackbar
        open={openAddSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseAddSnackbar}
      >
        <MuiAlert
          onClose={handleCloseAddSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          Item added successfully!
        </MuiAlert>
      </Snackbar>

      <Snackbar
        open={openDeleteSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseDeleteSnackbar}
      >
        <MuiAlert
          onClose={handleCloseDeleteSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          Item deleted successfully!
        </MuiAlert>
      </Snackbar>

      <Snackbar
        open={openUpdateSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseUpdateSnackbar}
      >
        <MuiAlert
          onClose={handleCloseUpdateSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          Item updated successfully!
        </MuiAlert>
      </Snackbar>
    </Container>
  );
};

export default Item;
