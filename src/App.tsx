import './App.css'

import {Route, Routes, } from "react-router-dom";

import Interface from "./components/Interface/Interface.tsx";
import Authorization from "./components/Authorization/Authorization.tsx";


function App() {
    return (
        <>
            <Routes>
                <Route path="/*"   element={<Interface/>  }/>
                <Route path="/login" element={<Authorization/>}/>

            </Routes>
        </>
    )
}

export default App
