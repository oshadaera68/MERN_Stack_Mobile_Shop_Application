import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import {Autocomplete} from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import {useEffect, useState} from "react";
import {getAllItems} from "../../../services/item.js";
import {getAllUsers} from "../../../services/customer.js";

const PlaceOrder  = () => {
  const [rows,setRows]=useState([
  ])


  return (
    <Container>
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2 }} rowSpacing={{ xs: 1, sm: 2, md: 2 }}>
        <Grid item xs={12} md={6} lg={3}>
          <Autocomplete
            disablePortal
            size={"small"}
            renderInput={(params) => <TextField {...params} label="Item" />}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Autocomplete
            disablePortal
            size={"small"}
            renderInput={(params) => <TextField {...params} label="Material" />}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Autocomplete
            size={"small"}
            disablePortal
            renderInput={(params) => <TextField {...params} label="Weight" />}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Autocomplete
            size={"small"}
            disablePortal
            renderInput={(params) => <TextField {...params} label="Quantity" />}
          />
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <Autocomplete
            size={"small"}
            disablePortal
            renderInput={(params) => <TextField {...params} label="Customer" />}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Autocomplete
            size={"small"}
            disablePortal
            renderInput={(params) => <TextField {...params} label="Address" />}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Autocomplete
            size={"small"}
            disablePortal
            renderInput={(params) => <TextField {...params} label="Contact" />}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <TextField
            size={"small"}
            disablePortal
            onChange={(e) => setBuyQty(e.target.value)}
            fullWidth
            label={"Buy Qty"}
          />
        </Grid>

        <Grid container spacing={2} justifyContent="space-between" my={2}>
          <Grid item>
            Price : <span>0.00</span>
          </Grid>
          <Grid item>
            <Button color="secondary" variant="contained" >Add Item</Button>
          </Grid>
        </Grid>
      </Grid>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Item Name</TableCell>
              <TableCell align="right">Brand</TableCell>
              <TableCell align="right">Customer</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">{row.itemName}</TableCell>
                <TableCell align="right">{row.weight}</TableCell>
                <TableCell align="right">{row.customer}</TableCell>
                <TableCell align="right">{row.qty}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.action}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Grid container justifyContent={"flex-end"} my={3}>
        <Button color="success" variant="contained">Place Order</Button>
      </Grid>
    </Container>
  )
}

export default PlaceOrder;
