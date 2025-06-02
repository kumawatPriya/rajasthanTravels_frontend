import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Screens/Home";
import { Signup } from "./LoginPage/SignUp";
import { Login } from "./LoginPage/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ContactUs } from "./Screens/ContactUs";
import BlogDetail from "./Blog/BlogDetails";
import { Blog } from "./Screens/Blog";
import { Destination } from "./Screens/Destination";
import ProfilePage from "./Screens/Profile";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/destinations" element={<Destination/>}/>
          <Route path="/profile" element={<ProfilePage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
