import {Snackbar} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {AiFillCloseCircle} from "react-icons/ai";
import React from "react";
import MuiAlert from "@mui/material/Alert";

const Toast = (props) => {
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  return(
    <Snackbar
      open={props.open}
      autoHideDuration={6000}
      anchorOrigin={{vertical: "top", horizontal: "center"}}
      onClose={props.close}
      action={
        <IconButton size="small" aria-label="close" color="inherit" onClick={props.close}>
          <AiFillCloseCircle fontSize="small"/>
        </IconButton>
      }
    >
      <Alert onClose={props.close} severity={props.severity} sx={{width: "100%"}}>
        {props.message}
      </Alert>
    </Snackbar>
  )
};
export default Toast;
