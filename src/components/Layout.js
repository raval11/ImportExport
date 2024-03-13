import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {Link} from "react-router-dom";
import {FaWhatsapp} from "react-icons/fa";

const Layout = ({children}) => {
    return (
        <div className="relative">
            <Navbar />
            <div>{children}</div>
            <div className="z-[999999] fixed z-1  bottom-[10%] lg:right-[8%] md:right-[10%] right-[20%]">
                <Link
                    to="whatsapp://send?text=Hello World!&phone=+919537580008"
                    className="rounded-full bg-green-600 text-white hover:bg-[white] fixed  hover:text-green-600"
                >
                    <FaWhatsapp className=" rounded-full text-6xl p-2" />
                </Link>
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
