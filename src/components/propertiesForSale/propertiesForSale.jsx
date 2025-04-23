import { useDispatch, useSelector } from "react-redux"
import { getPropertiesForSaleThunk } from "../../redux/slices/getPropertiesForSaleThunk";
import { useEffect, useRef, useState } from "react";
import { TextField } from "@mui/material";
import { addPropertyForSaleThunk } from "../../redux/slices/addPropertyForSaleThunk";
import { editMonthPrice, editMonthPriceN } from "../../redux/slices/customersSlice";
import { deletePropertyForSaleThunk } from "../../redux/slices/deletePropertyForSaleThunk";
import { useNavigate } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';
import Fab from '@mui/material/Fab';
import Button from '@mui/material/Button';
export const PropertiesForSale = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const propertiesForSale = useSelector(state => state.customers.propertyForSales);
    const userId = sessionStorage.getItem("userId");
    const userMonthPrice = sessionStorage.getItem("userPrice");
    //useSelector(state=>state.customers.customer_month_price);
    const price = useSelector(state => state.customers.price_for_advertisement_property);
    const [property, setProperty] = useState({
        sellsId: userId, propertyId: 0, propertyArea: 0, propertyCity: "", propertyNeighborhood: "",
        propertyPrice: 0, propertyGeneralDescription: "", propertyNumOfInterests: 0, sellsemail: ""
    });
    const ref = useRef();
    const refPrice = useRef();
    const [propertyForSaleId, setPropertyForSaleId] = useState();
    const [x, setX] = useState();
    const [y, setY] = useState();
    const [menu, setMenu] = useState(false);

    const Click = (e) => {

        setMenu(false);
        setPropertyForSaleId(-1);
    }
    const add = () => {

        ref.current.showModal();
        setProperty({
            sellsId: userId, propertyId: 0, propertyArea: "", propertyCity: "", propertyNeighborhood: "",
            propertyPrice: "", propertyGeneralDescription: "", propertyNumOfInterests: 0, sellsemail: ""
        })

    }
    const cancel = () => {
        ref.current.close();
    }

    const ok = async () => {

        console.log("ok");
        note2();
        dispatch(editMonthPrice());
        console.log("price" + price);
        dispatch(addPropertyForSaleThunk({ property: property, price: price }));
        ref.current.close();
    }
    const note = () => {
        refPrice.current.close();
    }
    const note2 = () => {
        refPrice.current.showModal();
    }
    const remove = async () => {

        dispatch(deletePropertyForSaleThunk({ propertyCode: propertyForSaleId, price: price }));
        note2();
        dispatch(editMonthPriceN());
    }
    useEffect(() => {
        dispatch(getPropertiesForSaleThunk(userId))
        window.addEventListener('click', Click);
        return () => {
            window.removeEventListener('click', Click)
        }

    }, [])   
    return <div>
        {menu && <div
            style={{ position: "absolute", top: y, left: x }}>
            <button
                onClick={remove} >delate</button>
            <br />
            <button>edit</button>
        </div>}
        {/* <button onClick={add}>add<AddIcon></AddIcon></button> */}
        <Tooltip title="Add new property for sale" arrow>
        <Fab id="add" onClick={add}>
         <AddIcon></AddIcon>
         </Fab>
        </Tooltip>
        <table>
            <thead>
                <tr>
                    <th>size</th>
                    <th>city</th>
                    <th>neighborhood</th>
                    <th>price</th>
                    <th>description</th>
                    <th>number of interests</th>
                </tr>
            </thead>
            <tbody style={{
                overflowY:"scroll",
                height:"1px",
                border:'2px solid red'
            }}>
                {propertiesForSale.map(property =>
                    <tr key={property.propertyId}
                        onContextMenu={(e) => {
                            setPropertyForSaleId(property.propertyId);
                            setX(e.clientX);
                            setY(e.clientY);
                            setMenu(true);
                            // console.log(menu);
                            e.preventDefault();
                        }}
                        className={property.propertyId === propertyForSaleId ? "selcet" : "unSelect"}>
                        <td>{property.propertyArea}</td>
                        <td>{property.propertyCity}</td>
                        <td>{property.propertyNeighborhood}</td>
                        <td>{property.propertyPrice}</td>
                        <td>{property.propertyGeneralDescription}</td>
                        <td>{property.propertyNumOfInterests}</td>
                    </tr>
                )}

            </tbody>
        </table>
        <dialog ref={ref}>
            <TextField id="outlined-basic" label="propertyArea" variant="outlined" onChange={(e) => setProperty({ ...property, propertyArea: e.target.value })} value={property.propertyArea} />
            <TextField id="outlined-basic" label="propertyCity" variant="outlined" onChange={(e) => setProperty({ ...property, propertyCity: e.target.value })} value={property.propertyCity} />
            <TextField id="outlined-basic" label="propertyNeighborhood" variant="outlined" onChange={(e) => setProperty({ ...property, propertyNeighborhood: e.target.value })} value={property.propertyNeighborhood} />
            <TextField id="outlined-basic" label="propertyPrice" variant="outlined" onChange={(e) => setProperty({ ...property, propertyPrice: e.target.value })} value={property.propertyPrice} />
            <TextField id="outlined-basic" label="propertyGeneralDescription" variant="outlined" onChange={(e) => setProperty({ ...property, propertyGeneralDescription: e.target.value })} value={property.propertyGeneralDescription} />
            <Button id="loginb" variant="contained" disableElevation sx={{ textTransform: 'lowercase' }} onClick={ok}>
            ok
            </Button>
            <Button id="loginb" variant="contained" disableElevation sx={{ textTransform: 'lowercase' }} onClick={cancel}>
            cancel
            </Button>
            {/* <button onClick={ok}>ok</button> */}
            {/* <button onClick={cancel}>cancel</button> */}
        </dialog>
        <dialog ref={refPrice} >note:
            your price will be update to <div>{userMonthPrice}$</div>
            <button onClick={note}>ok</button>
        </dialog>
    </div>
}
