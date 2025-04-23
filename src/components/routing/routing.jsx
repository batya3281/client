import { Routes ,Route, useNavigate} from "react-router-dom"
import { Login } from "../login/login"
import { Logon } from "../logon/logon"
import { Home } from "../home/home"
import { RequiredProperties } from "../requiredProperties/requiredProperties"
import { PropertiesForSale } from "../propertiesForSale/propertiesForSale"
import { FavoriteProperties } from "../favoriteProperties/favoriteProperties"
import { Search } from "../search/search"

export const Routing=()=>{

    return <div>
        <Routes>
        <Route path={'/'} element={<Login/>}/>    
        <Route path={'/logon'} element={<Logon/>}/>   
        <Route path={'/home'} element={<Home/>}>
        <Route path={'requiredProperties'} element={<RequiredProperties/>}></Route>  
        <Route path={'propertiesForSale'} element={<PropertiesForSale/>}/> 
        <Route path={'favoriteProperties'} element={<FavoriteProperties/>}/>
        <Route path={'search'} element={<Search/>}/>
        </Route>
        {/* <Route path={'/requiredProperties'} element={<RequiredProperties/>}/>  
        <Route path={'/propertiesForSale'} element={<PropertiesForSale/>}/> 
        <Route path={'/favoriteProperties'} element={<FavoriteProperties/>}/>
        <Route path={'/search'} element={<Search/>}/> */}
    </Routes></div>

}