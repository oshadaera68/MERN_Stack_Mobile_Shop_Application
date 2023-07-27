import './App.css'
import Login from './components/auth/Login.jsx'
import Dashboard from "./components/dashboard/Dashboard";
import {Navigate, Route, Routes} from "react-router-dom";
import Items from "./components/dashboard/Items/Items.jsx";
import Customers from "./components/dashboard/Customers/Customers.jsx";
import PlaceOrder from "./components/dashboard/PlaceOrder/PlaceOrder.jsx";

function App() {
  const token = localStorage.getItem('token');

  return (
    <Routes>
      {!token ? (
        <>
          <Route path="/" element={<Login/>}/>
          <Route path="*" element={<Navigate to="/" replace/>}/>
        </>
      ) : (
        <>
          <Route path="/dashboard" element={<Dashboard/>}>
            <Route index element={<PlaceOrder/>}/>
            <Route path="items" element={<Items/>}/>
            <Route path="customers" element={<Customers/>}/>
          </Route>
          <Route path="*" element={<Navigate to="/dashboard" replace/>}/>
        </>
      )}
    </Routes>
  )
}

export default App
