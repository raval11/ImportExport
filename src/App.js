import React from "react";
import { Route, Routes} from "react-router-dom";
import Home from "./pages/Home";

import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import ProductPage from "./pages/ProductPage";
import ProductDetails from "./components/ProductDetails";
import LoginForm from "./components/LoginForm";

import Inquary from "./components/Inquary";
import Category from "./pages/Category";
import NotFound from "./components/NotFound";
import "./App.css";

import Layout from "./components/Layout";

const App = () => {
    return (
        <>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/kapuriya/login" element={<LoginForm />}></Route>
                    <Route path="/Product" element={<ProductPage />}></Route>
                    <Route path="/Product/:id" element={<ProductDetails />}></Route>
                    <Route path="/About" element={<AboutUs />}></Route>
                    <Route path="/Contact" element={<ContactUs />}></Route>
                    <Route path="/Inquary" element={<Inquary />}></Route>
                    <Route path="/Category/:name" element={<Category />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </Layout>
           
          
        </>
    );
};

export default App;
