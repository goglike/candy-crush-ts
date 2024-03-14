import Header from "./Header/Header.tsx";
import UserMenu from "./Header/UserMenu.tsx";
import {Route, Routes} from "react-router-dom";
import Home from "./Home/Home.tsx";
import Footer from "./Footer/Footer.tsx";
import Catalog from "./Catalog/Catalog.tsx";
import {Settings} from "./Settings/Settings.tsx";

const Interface = () => {
    return (
        <>
            <Header/>
            <UserMenu/>
            <Routes>
                <Route path="/catalog" element={<Catalog/>}/>
                <Route path="/*" element={<Home/>}/>
                <Route path="/settings" element={ <Settings/> } />
            </Routes>
            <Footer/>
        </>
    )
}
export default Interface
