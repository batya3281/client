import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavoritePropertiesThunk } from "../../redux/slices/getFavoritePropertiesThunk";
import { useNavigate } from "react-router-dom";
import { removePropertyFromFavoriteListThunk } from "../../redux/slices/removePropertyFromFavoriteListThunk";

export const FavoriteProperties = () => {
    const favoriteProperties = useSelector(state => state.customers.favoriteProperties);
    const userId = sessionStorage.getItem("userId");
    const dispatch = useDispatch();
    const [propertyForSaleId, setPropertyForSaleId] = useState();
    const [x, setX] = useState();
    const [y, setY] = useState();
    const [menu, setMenu] = useState(false);
    const Click = () => {
        setMenu(false);
        setPropertyForSaleId(-1);
    }

    const unFavorite = async () => {
        dispatch(removePropertyFromFavoriteListThunk({ customerCode: sessionStorage.getItem("userId"), propertyCode: propertyForSaleId }));
    }
    useEffect(() => {
        dispatch(getFavoritePropertiesThunk(userId));
        window.addEventListener('click', Click);
        return () => {
            window.removeEventListener('click', Click)
        }
    }, [])
    return <div>
        {menu && <div
            style={{ position: "absolute", top: y, left: x }}>
            <button onClick={unFavorite}>remove from favorite</button>
        </div>}
        <table>
            <thead>
                <tr>
                    <th>description</th>
                    <th>size</th>
                    <th>city</th>
                    <th>neighborhood</th>
                    <th>price</th>
                    <th>sells email</th>
                </tr>
            </thead>
            <tbody>
                {favoriteProperties?.map(property =>
                    <tr key={property.propertyId}
                        onContextMenu={(e) => {
                            setPropertyForSaleId(property.propertyId);
                            setX(e.clientX);
                            setY(e.clientY);
                            setMenu(true);
                            e.preventDefault();
                        }}
                        className={property.propertyId === propertyForSaleId ? "selcet" : "unSelect"}>
                        <td>{property.propertyGeneralDescription}</td>
                        <td>{property.propertyArea}</td>
                        <td>{property.propertyCity}</td>
                        <td>{property.propertyNeighborhood}</td>
                        <td>{property.propertyPrice}</td>
                        <td>{property.sellsemail}</td>
                    </tr>
                )}

            </tbody>
        </table>

    </div>
}