import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "../../redux/slices/loginThunk";
import { editNameAndPassword } from "../../redux/slices/customersSlice";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LockIcon from '@mui/icons-material/Lock';
import Button from '@mui/material/Button';
import "./login.css";
export const Login = () => {
  const [details, setDetails] = useState({ name: "", password: "" });
  const dispatch = useDispatch();
  const customer = useSelector(state => state.customers.user);
  const navigate = useNavigate();
  //function
  const login = async () => {
    console.log("login");
    await dispatch(loginThunk(details));
  }
  useEffect(
    () => {
      if (customer !== null && customer.customerId > 0) {
        console.log(customer.customerId);
        navigate(`/home`);
      }
      else if (customer === null) {
        dispatch(editNameAndPassword(details));
        //  console.log(customer.customer_name);
        navigate(`/logon`);
      }
    }, [customer]
  )
  return <div id="login">
    <br />
    <PersonIcon id="personIcon"></PersonIcon><br />
    <div id="details">
      <div className="text">
        <TextField id="outlined-basic" 
 label="name*" variant="standard" onChange={(e) => setDetails({ ...details, name: e.target.value })} /><AccountBoxIcon id="icon" /><br />
      </div>
      <div className="text">
      <TextField id="outlined-basic" label="password*" variant="standard" onChange={(e) => setDetails({ ...details, password: e.target.value })} /><LockIcon id="icon" /><br />
      </div>
      {/* <button onClick={login}>login</button> */}
      <br />
      <Button id="loginb" variant="contained" disableElevation sx={{ textTransform: 'lowercase' }} onClick={login}>
               login
            </Button></div>
  </div>
}
