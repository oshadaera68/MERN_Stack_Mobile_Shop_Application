import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";

const DialogPopup = (props) => {
  return (
    <Dialog
      open={props.dialogOpen}
      onClose={props.onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {props.title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {props.description}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="error" onClick={props.onClickLeftButton}>{props.LeftButtonText}</Button>
        <Button variant="contained" color={"primary"} autoFocus onClick={props.onClickRightButton}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogPopup;
