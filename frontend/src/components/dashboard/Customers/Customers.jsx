import {useEffect, useState} from "react";
import {Backdrop, InputBase} from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import {BiPlusCircle, BiSearch} from "react-icons/bi";
import IconButton from "@mui/material/IconButton";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import AddCustomer from "./AddCustomer/AddCustomer.jsx";
import {getAllUsers} from "../../../services/customer.js";

const Customers = () => {
  const [openAddCustomer, setOpenAddCustomer] = useState(false);
  const [customer, setCustomer] = useState([]);
  const [search, setSearch] = useState("");
  const [rows, setRows] = useState([]);
  const [filteredRows, setFilteredRows] = useState([]);

  const createData = (name, telephone, address, email, action) => {
    return {name, telephone, address, email, action};
  };

  const filterRows = () => {
    const filteredData = rows.filter((row) => {
      const {name, address, telephone, email} = row;
      const searchText = search.toLowerCase();

      const nameMatch = name && name.toLowerCase().includes(searchText);
      const addressMatch = address && address.toLowerCase().includes(searchText);
      const telephoneMatch = telephone && telephone.toLowerCase().includes(searchText);
      const emailMatch = email && email.toLowerCase().includes(searchText);

      return nameMatch || addressMatch || telephoneMatch || emailMatch;
    });
    setFilteredRows(filteredData);
  };


  useEffect(() => {
    filterRows();
  }, [search, rows]);

  useEffect(() => {
    const getCustomers = async () => {
      const customers = await getAllUsers();
      const mappedRows = customers.data.map((customer) =>
        createData(
          customer.name,
          customer.telephone,
          customer.address,
          customer.email,
          <Button
            variant="contained"
            size={"small"}
            onClick={() => {
              setCustomer(customer);
              setOpenAddCustomer(true);
            }}
          >
            View
          <
         /Button>
        ));
      setRows(mappedRows);
    }
    getCustomers();
  }, []);


  return (
    <div>
      <Backdrop
        sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
        open={openAddCustomer}
      >
        <AddCustomer customer={customer} onClose={() => setOpenAddCustomer(false)}/>
      </Backdrop>

      <Grid item xs={12} md={8} lg={9}>
        <Paper
          sx={{
            p: 2
          }}
          className="TopBar"
        >
          <div style={{
            display: 'flex',
            gap: 10
          }}>
            <Button
              size="small"
              variant="contained"
              color="success"
              endIcon={<BiPlusCircle/>}
              onClick={() => {
                setCustomer([]);
                setOpenAddCustomer(true);
              }}
            >
              Add Customer
            </Button>
          </div>

          <div className="SearchItem">
            <InputBase
              sx={{ml: 1, flex: 1}}
              placeholder="Search Customer"
              inputProps={{'aria-label': 'search items'}}
              value={search}
              onChange={event => setSearch(event.target.value)}
            />
            <IconButton type="button" sx={{p: '10px'}} aria-label="search">
              <BiSearch/>
            </IconButton>
          </div>
        </Paper>
      </Grid>

      <TableContainer component={Paper} sx={{mt: 5}}>
        <Table sx={{minWidth: 650}} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell sx={{fontWeight: 'bold'}}>Name</TableCell>
              <TableCell sx={{fontWeight: 'bold'}} align="right">Telephone</TableCell>
              <TableCell sx={{fontWeight: 'bold'}} align="right">Address</TableCell>
              <TableCell sx={{fontWeight: 'bold'}} align="right">Email</TableCell>
              <TableCell sx={{fontWeight: 'bold'}} align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows.map((row) => (
              <TableRow
                key={row.name}
                sx={{'&:last-child td, &:last-child th': {border: 0}}}
              >
                <TableCell component="th" scope="row">{row.name}</TableCell>
                <TableCell align="right">{row.telephone}</TableCell>
                <TableCell align="right">{row.address}</TableCell>
                <TableCell align="right">{row.gender}</TableCell>
                <TableCell align="right">{row.action}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Customers;
