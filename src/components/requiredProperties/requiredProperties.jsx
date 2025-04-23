import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getRequiredPropertiesThunk } from "../../redux/slices/getRequiredPropertiesThunk";
import { TextField } from "@mui/material";
import { addRequiredPropertyThunk } from "../../redux/slices/addRequiredProperty";
import { editMonthPrice, editMonthPriceN } from "../../redux/slices/customersSlice";
import { useNavigate } from "react-router-dom";
import './requiredProperties.css';
import { deleteRequiredPropertyThunk } from "../../redux/slices/deleteRequiredPropertyThunk";
import { searchPropertiesThunk } from "../../redux/slices/searchPropertiesThunk";
import FavoriteIcon from '@mui/icons-material/Favorite';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';
import { updateRequiredPropertyThunk } from "../../redux/slices/updateRequiredPropertyThunk";
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
export const RequiredProperties = () => {
   const dispatch = useDispatch();
   const userMonthPrice = sessionStorage.getItem("userPrice");
   //useSelector(state=>state.customers.customer_month_price);
   const user = useSelector(state => state.customers.user);
   const price = useSelector(state => state.customers.price_for_advertisement_property);
   const userId = sessionStorage.getItem("userId");
   const requiredProperties = useSelector(state => state.customers.propertiesForPurchases);
   const [property, setProperty] = useState({ purchaserId: userId, minAreaProperty: 0, maxAreaProperty: 0, city: "", maxPrice: 0, propertyForPurchaseId: 0 });
   const navigate = useNavigate();
   const ref = useRef();
   const refU = useRef();
   const refPrice = useRef();
   const [propertyForPurchaseId, setPropertyForPurchaseId] = useState();
   const [x, setX] = useState();
   const [y, setY] = useState();
   const [menu, setMenu] = useState(false);
   //    const rightClick = (e) => {
   //       setX(e.clientX);
   //       setY(e.clientY);
   //       setMenu(true);
   //       // console.log(menu);
   //       e.preventDefault();
   //   }
   const Click = (e) => {
      // setmenuEvent(false);
      setMenu(false);
      setPropertyForPurchaseId(-1);
   }
   const add = () => {
      ref.current.showModal();
      setProperty({ purchaserId: userId, minAreaProperty: "", maxAreaProperty: "", city: "", maxPrice: "", propertyForPurchaseId: 0 })
   }

   const ok = async () => {
      debugger
      console.log("ok");
      note2();
      dispatch(editMonthPrice());
      console.log("price" + price);
      await dispatch(addRequiredPropertyThunk({ property: property, price: price }));

      ref.current.close();
      // setProperty({ purchaserId: userId, minAreaProperty: 0, maxAreaProperty: 0, city: "", maxPrice: 0, propertyForPurchaseId: 0 })
   }
   const cancel = () => {
      ref.current.close();
      refU.current.close();
   }
   const search = async () => {
      sessionStorage.setItem("propertyForPurchaseId", propertyForPurchaseId);
      dispatch(searchPropertiesThunk(sessionStorage.getItem("propertyForPurchaseId")));
      navigate('/home/search')
   }
   const note = () => {
      refPrice.current.close();
   }
   const note2 = () => {
      refPrice.current.showModal();
   }
   const update = () => {
      refU.current.showModal();
   }
   const okU = async () => {
      dispatch(updateRequiredPropertyThunk(property));
      refU.current.close();
   }
   // const favorite = () => {
   //    navigate('favoriteProperties');
   // }
   const remove = async () => {
      dispatch(deleteRequiredPropertyThunk({ propertyCode: propertyForPurchaseId, price: price }));
      note2();
      dispatch(editMonthPriceN());
   }
   useEffect(() => {
      dispatch(getRequiredPropertiesThunk(userId))
      window.addEventListener('click', Click);
      return () => {
         window.removeEventListener('click', Click)
      }

   }, [])
   return <div>
      {menu && <div
         style={{ position: "absolute", top: y, left: x }}>
         <button onClick={remove}>delate</button>
         <br />
         <button onClick={update}> edit</button>
         <br />
         <button onClick={search}>search</button>
      </div>}
      {/* <button onClick={add}>add</button> */}
      <Tooltip title="Add new required property" arrow>
         <Fab id="add" onClick={add}>
         <AddIcon ></AddIcon>
         </Fab>
      </Tooltip>
      <table>
         <thead>
            <tr>
               <th>maximal size</th>
               <th>minaml size</th>
               <th>city</th>
               <th>maximal price</th>
            </tr>
         </thead>
         <tbody>
            {requiredProperties.map(property =>
               <tr key={property.propertyForPurchaseId}
                  onContextMenu={(e) => {
                     setPropertyForPurchaseId(property.propertyForPurchaseId);
                     setProperty({
                        purchaserId: userId, minAreaProperty: property.minAreaProperty, maxAreaProperty: property.maxAreaProperty,
                        city: property.city, maxPrice: property.maxPrice, propertyForPurchaseId: property.propertyForPurchaseId
                     })
                     setX(e.clientX);
                     setY(e.clientY);
                     setMenu(true);
                     // console.log(menu);
                     e.preventDefault();
                  }}
                  //  onContextMenu={rightClick}
                  className={property.propertyForPurchaseId === propertyForPurchaseId ? "selcet" : "unSelect"}>
                  <td >{property.maxAreaProperty}</td>
                  <td >{property.minAreaProperty}</td>
                  <td >{property.city}</td>
                  <td >{property.maxPrice}</td>
               </tr>
            )}
         </tbody>
      </table>
      {/* <button onClick={favorite}>favorite properties<FavoriteIcon></FavoriteIcon></button> */}
      <dialog ref={ref}>
         <TextField id="outlined-basic" label="maximal size" variant="outlined" onChange={(e) => setProperty({ ...property, maxAreaProperty: e.target.value })} value={property.maxAreaProperty} />
         <TextField id="outlined-basic" label="minaml size" variant="outlined" onChange={(e) => setProperty({ ...property, minAreaProperty: e.target.value })} value={property.minAreaProperty} />
         <TextField id="outlined-basic" label="city" variant="outlined" onChange={(e) => setProperty({ ...property, city: e.target.value })} value={property.city} />
         <TextField id="outlined-basic" label="maximal price" variant="outlined" onChange={(e) => setProperty({ ...property, maxPrice: e.target.value })} value={property.maxPrice} />
         <Button id="loginb" variant="contained" disableElevation sx={{ textTransform: 'lowercase' }} onClick={ok}>
            ok
            </Button>
            <Button id="loginb" variant="contained" disableElevation sx={{ textTransform: 'lowercase' }} onClick={cancel}>
            cancel
            </Button>
      </dialog> <dialog ref={refPrice} >note:
         your price will be update to <div>{userMonthPrice}$</div>
         <button onClick={note}>ok</button>
      </dialog>
      <dialog ref={refU}>
         <TextField id="outlined-basic" label="maximal size" variant="outlined" onChange={(e) => setProperty({ ...property, maxAreaProperty: e.target.value })} value={property.maxAreaProperty} />
         <TextField id="outlined-basic" label="minaml size" variant="outlined" onChange={(e) => setProperty({ ...property, minAreaProperty: e.target.value })} value={property.minAreaProperty} />
         <TextField id="outlined-basic" label="city" variant="outlined" onChange={(e) => setProperty({ ...property, city: e.target.value })} value={property.city} />
         <TextField id="outlined-basic" label="maximal price" variant="outlined" onChange={(e) => setProperty({ ...property, maxPrice: e.target.value })} value={property.maxPrice} />
         <button onClick={okU}>ok</button>
         <button onClick={cancel}>cancel</button>
      </dialog>
   </div>
}