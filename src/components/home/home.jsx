import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import "./home.css"
import { useState } from "react";

export const Home = () => {
    const navigate = useNavigate();
    const [num,setNum]=useState(-1);
    const getPropertiesForSale = () => {
        navigate("propertiesForSale");
    }
    const getRequiredProperties = () => {
        navigate("requiredProperties");
    }
    const getFavoriteProperties = () => {
        navigate("favoriteProperties");
    }
    return <div>
        <div id="header">
            <div id="welcome">welcome {sessionStorage.getItem("userName")}</div>
            <img src={"logo.png"} id="logo"></img>
        </div>
        <nav>
            <Button id={num === 0? "selected2" : "b"} variant="contained" disableElevation onClick={()=>{
                setNum(0);
                getPropertiesForSale();}
            } sx={{ textTransform: 'lowercase' }} >
                Your properties for sale
            </Button>
            <Button id={num === 1? "selected2" : "b"} variant="contained" disableElevation onClick={()=>{
                setNum(1);
                getRequiredProperties()
            }} sx={{ textTransform: 'lowercase' }} className={num === 1? "selcet" : "unSelect"}>
                Your properties for purchase
            </Button>
            <Button id={num === 2? "selected2" : "b"} variant="contained" disableElevation onClick={()=>{
                setNum(2);
                getFavoriteProperties();}} sx={{ textTransform: 'lowercase' }}>
                Your favorite properties
            </Button>
        </nav>

        <div id="main">
            <Outlet></Outlet></div>
    </div>
}