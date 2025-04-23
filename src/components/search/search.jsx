import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchPropertiesThunk } from "../../redux/slices/searchPropertiesThunk";
import { addPropertyFoFavoriteListThunk } from "../../redux/slices/addPropertyFoFavoriteListThunk";
import { getFavoritePropertiesThunk } from "../../redux/slices/getFavoritePropertiesThunk";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
export const Search = () => {
    const propertyForPurchaseId = sessionStorage.getItem("propertyForPurchaseId");
    const properties = useSelector(state => state.customers.propertiesFromSearch);
    const favoriteProperties = useSelector(state => state.customers.favoriteProperties);
    const [r,setR]=useState();
    const dispatch = useDispatch();
    const [propertyForSaleId, setPropertyForSaleId] = useState();
    const [x, setX] = useState();
    const [y, setY] = useState();
    const [menu, setMenu] = useState(false);
    const userId = sessionStorage.getItem("userId");
useEffect(()=>{
    if(favoriteProperties===null&&properties!==null)
     dispatch(getFavoritePropertiesThunk(userId));

},[properties])

    const Click = () => {
        setMenu(false);
        setPropertyForSaleId(-1);
    }
    const favorite = async() =>{
        debugger
        dispatch(addPropertyFoFavoriteListThunk({customerCode:sessionStorage.getItem("userId"),propertyCode:propertyForSaleId}));
        setR();
    }
    useEffect(() => {

        console.log("useEffect");
        dispatch(searchPropertiesThunk(propertyForPurchaseId));

        window.addEventListener('click', Click);
        return () => {
            window.removeEventListener('click', Click)
        }
    }, []
    )
    return <div>
        {menu && <div
            style={{ position: "absolute", top: y, left: x }}>
            <button onClick={favorite}>mark as favorite</button>
        </div>}
        <table>
            <thead>
                <tr>
                    <th>size</th>
                    <th>city</th>
                    <th>neighborhood</th>
                    <th>price</th>
                    <th>description</th>
                    <th>sellsEmail</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {properties?.map(property =>
                    <tr key={property.propertyId}
                        onContextMenu={(e) => {
                            if(favoriteProperties?.find(v=> v.propertyId===property.propertyId)==null){
                            setPropertyForSaleId(property.propertyId);
                            setX(e.clientX);
                            setY(e.clientY);
                            setMenu(true);
                            e.preventDefault();}
                        }}
                        className={property.propertyId === propertyForSaleId ? "selcet" : "unSelect"}
                        // style={{backgroundColor: favoriteProperties.find(v=> v.propertyId==property.propertyId)!=null ? 'green':'yellow'}}
                        >
                        <td>{property.propertyArea}</td>
                        <td>{property.propertyCity}</td>
                        <td>{property.propertyNeighborhood}</td>
                        <td>{property.propertyPrice}</td>
                        <td>{property.propertyGeneralDescription}</td>
                        <td>{property.sellsemail}</td>
                        <td>{favoriteProperties?.find(v=> v.propertyId===property.propertyId)!=null?<FavoriteIcon  id="FavoriteIcon"/>:<FavoriteBorderIcon id="FavoriteBorderIcon"/>}</td>
                    
                    </tr>
                )}

            </tbody>
        </table>
    </div>
}