import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import PhotoPage from "../pages/PhotoPage";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";

export default function AuthRoutes() {
  
    return (
      <Routes>
        <Route path='/' element={<MainLayout/>}>
            <Route path='home' element={<HomePage/>}/>
            <Route path='register' element={<RegisterPage/>}/>
            <Route path='photos' element={<PhotoPage/>}/>
        </Route>
      </Routes>
    );
  }