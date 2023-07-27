import './AddItem.css';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {GrClose} from "react-icons/gr";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import {Autocomplete, InputAdornment} from "@mui/material";
import TextField from "@mui/material/TextField";
import React, {useEffect, useState} from "react";
import Button from "@mui/material/Button";
import {FaDeleteLeft} from "react-icons/fa6";
import {deleteItem, saveItem, updateItem} from "../../../../services/item.js";
import DialogPopup from "../../../Dialog/Dialog.jsx";
import Toast from "../../../Toast/Toast.jsx";
import validator from "validator";

const AddItem = (props) => {
  
  const [itemName, setItemName] = useState('');
  const [model, setModel] = useState('');
  const [color, setColor] = useState('');
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState(false);

  useEffect(() => {
    if (props.item) {
      const {itemName, brand, model, color, price, quantity} = props.item;
      setItemName(itemName || "");
      setBrand(brand || "");
      setModel(model || "");
      setColor(color || "");
      setPrice(price || "");
      setQuantity(quantity || "");
    }
  }, [props.item]);

  const item = {
    name: itemName,
    brand,
    model,
    color,
    price,
    quantity
  }

  const showMessage = (message, severity) => {
    setMessage(message);
    setAlertSeverity(severity);
    setSnackbarOpen(true);
  };


  const onSaveItem = async () => {
    
      try {
        await saveItem(item);
        props.onClose();
      } catch (e) {
        console.log(e)
      }
    
  };

  const onUpdateItem = async () => {
  
      try {
        await updateItem(props.item._id, item);
        props.onClose();
      } catch (e) {
        console.log(e)
      }
    
  }

  const onDeleteItem = async () => {
    try {
      await deleteItem(props.item._id);
      setDialogOpen(false);
      props.onClose();
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Box className="Container" width={720} m={1}>
      <Toast
        open={snackbarOpen}
        close={() => setSnackbarOpen(false)}
        severity={alertSeverity}
        message={message}
      />
      <DialogPopup
        dialogOpen={dialogOpen}
        onClose={() => setDialogOpen(false)}
        title={"Delete Item?"}
        description={"Are you sure you want to delete this Item?"}
        onClickLeftButton={onDeleteItem}
        onClickRightButton={() => setDialogOpen(false)}
        LeftButtonText={"Yes, delete"}
      />
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={11}>
          <Typography align="center" color="black" variant="h6" gutterBottom>
            {props.item?._id === undefined ? "Add" : "Edit"} Item
          </Typography>
        </Grid>
        <Grid item xs={1} textAlign="end" paddingRight={1}>
          <GrClose color="black" onClick={props.onClose} cursor="pointer"/>
        </Grid>
      </Grid>
      <Container sx={{mt: 2}}>
        <Grid container spacing={2}>
          <Grid item lg={6} md={6} xs={12}>
          <TextField
              size={"small"}
              id="outlined-start-adornment"
              placeholder='Item'
              value={itemName}
              onChange={e => setItemName(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item lg={6} md={6} xs={12}>
          <TextField
              size={"small"}
              id="outlined-start-adornment"
              placeholder='Brand'
              value={brand}
              onChange={e => setBrand(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item lg={6} md={6} xs={12}>
            <TextField
              size={"small"}
              id="outlined-start-adornment"
              placeholder='Model'
              value={model}
              onChange={e => setModel(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item lg={6} md={6} xs={12}>
            <TextField
              size={"small"}
              placeholder='Color'
              value={color}
              onChange={e => setColor(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item lg={6} md={6} xs={12}>
            <TextField
              size={"small"}
              fullWidth
              placeholder="Price"
              value={price}
              onChange={e => setPrice(e.target.value)}
            />
          </Grid>
          <Grid item lg={6} md={6} xs={12}>
            <TextField
              size={"small"}
              placeholder="Quantity"
              type="number"
              fullWidth
              value={quantity}
              onChange={e => setQuantity(e.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={2} justifyContent="space-between">
              <Grid item>
                {props.item?._id === undefined ? (
                  <Button color="secondary" variant="outlined">Clear</Button>
                ) : (
                  <Button
                    color="error"
                    variant="outlined"
                    endIcon={<FaDeleteLeft/>}
                    onClick={() => setDialogOpen(true)}
                  >
                    Delete
                  </Button>
                )}

              </Grid>
              <Grid item>
                {props.item?._id === undefined ? (
                    <Button color="success" variant="contained" onClick={onSaveItem}>Add Item</Button>)
                  : (
                    <Button color="secondary" variant="contained" onClick={onUpdateItem}>
                      Update
                    </Button>
                  )}
              </Grid>
            </Grid>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}

export default AddItem;
