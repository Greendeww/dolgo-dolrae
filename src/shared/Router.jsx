import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login1 from "../pages/Login1";
import Login2 from "../pages/Login2";
import SignUp from "../pages/SignUp";
import Detail from "../pages/Detail";



function Router(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/login" element= {<Login1/>}/>
            <Route path="/login2" element= {<Login2/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/detail/:id" element={<Detail />} />
        </Routes>
        </BrowserRouter>
    )
}

export default Router;