import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { logonThunk } from "../../redux/slices/logonThunk";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import LockIcon from '@mui/icons-material/Lock';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PasswordSharpIcon from '@mui/icons-material/PasswordSharp';
import Button from '@mui/material/Button';
export const Logon = () => {
    const name = useSelector(state => state.customers.customer_name);
    const password = useSelector(state => state.customers.customer_password);
    const [customer, setCustomer] = useState({
        customerId: 0, customerName: name, customerPassword: password, customerCreditCardNumber: "",
        customerCvv: "", customerValidThru: "", customerEmail: "", customerMonthPrice: 0
    });
    const dispatch = useDispatch();
    const user = useSelector(state => state.customers.user);
    const navigate = useNavigate();
    
    const logon = async () => {
        console.log("logon");
        await dispatch(logonThunk(customer));
    }
    // useEffect(() => {
    //     setCustomer({ ...customer, name: name });
    //     setCustomer({ ...customer, password: password });
    // }, [])
    useEffect(() => {
        if (user !== null && user.customerId > 0) {
            console.log(user.customerId);
            navigate(`/home`);
        }
    }, [user])
    return <div id="logon">
        <br/>
        <PersonAddAlt1Icon id="personIcon"></PersonAddAlt1Icon><br />
        <div id="details2">
          <div className="text">
          <TextField id="outlined-basic"  label="name*"  value={name} variant="standard" onChange={(e) => setCustomer({ ...customer, customerName: e.target.value })}/><AccountBoxIcon id="icon"/><br/><br/>
          </div>
          <div className="text">
          <TextField id="outlined-basic" label="password*" value={password} variant="standard" onChange={(e) => setCustomer({ ...customer, customerPassword: e.target.value })}/><LockIcon id="icon"/><br/><br/>
          </div>
          <div className="text">
          <TextField id="outlined-basic" label="email*" variant="standard" onChange={(e) => setCustomer({ ...customer, customerEmail: e.target.value })}/><AlternateEmailIcon id="icon"/><br/><br/>
          </div>
          <div className="text">
          <TextField id="outlined-basic" label="creditCardNumber*" variant="standard" onChange={(e) => setCustomer({ ...customer, customerCreditCardNumber: e.target.value })} /><CreditCardIcon id="icon"/><br/><br/>
          </div>
          <div className="text">
          <TextField id="outlined-basic" label="validThru*" variant="standard" onChange={(e) => setCustomer({ ...customer, customerValidThru: e.target.value })} /><CalendarMonthIcon id="icon"/><br/><br/>
          </div>
          <div className="text">
          <TextField id="outlined-basic" label="cvv*" variant="standard" onChange={(e) => setCustomer({ ...customer, customerCvv: e.target.value })}/><PasswordSharpIcon id="icon"/><br/><br/>
          </div>
        {/* <button onClick={logon}>logon</button> */}
<br />
        <Button id="loginb" variant="contained" disableElevation sx={{ textTransform: 'lowercase' }} onClick={logon}>
               logon
            </Button></div>
    </div>
}
