import React, { useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";

const Item = () => {
  const [itemCode, setItemCode] = useState("");
  const [itemName, setItemName] = useState("");
  const [itemQty, setItemQty] = useState("");
  const [itemUnitPrice, setItemUnitPrice] = useState("");
  const [errors, setErrors] = useState({});
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [openAddSnackbar, setOpenAddSnackbar] = useState(false);
  const [openUpdateSnackbar, setOpenUpdateSnackbar] = useState(false);
  const [openDeleteSnackbar, setOpenDeleteSnackbar] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    // Perform validations
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

    // If there are validation errors, set them in the state and prevent form submission
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // If no validation errors, proceed with form submission
    // Add your logic here to handle form submission, e.g., API call, etc.

    setOpenSnackbar(true);
    // Clear the form fields and errors after successful submission
    setItemCode("");
    setItemName("");
    setItemQty("");
    setItemUnitPrice("");
    setErrors({});
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  const handleDelete = () => {
    // Add your logic here to handle delete action, e.g., API call, etc.

    setOpenDeleteSnackbar(true);
    // Clear the form fields and errors after successful delete
    setItemCode("");
    setItemName("");
    setItemQty("");
    setItemUnitPrice("");
    setErrors({});
  };

  const handleUpdate = () => {
    // Add your logic here to handle update action, e.g., API call, etc.

    setOpenUpdateSnackbar(true);
    // Clear the form fields and errors after successful update
    setItemCode("");
    setItemName("");
    setItemQty("");
    setItemUnitPrice("");
    setErrors({});
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
            <Button type="submit" className="text-black" variant="success">
              Add
            </Button>
            <Button variant="warning" className="left-2" disabled={!itemCode}>
              Update
            </Button>
            <Button variant="danger" className="left-2" disabled={!itemCode}>
              Delete
            </Button>
          </Col>
        </Row>
      </Form>

      {/* Snackbar for Add action */}
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

      {/* Snackbar for Delete action */}
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

      {/* Snackbar for Update action */}
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
