import React from "react";
import {FaPhone} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import {FaLocationDot} from "react-icons/fa6";
import {Link} from "react-router-dom";
import {FaBell} from "react-icons/fa";
import {FaFileCirclePlus} from "react-icons/fa6";
import {FaHeadphones} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa6";
import {FaLinkedinIn} from "react-icons/fa6";
import {FaFacebookF} from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        <section className="w-[100%]  bg-gray-900 text-white"> 
        <div className="w-[90%] mx-auto  mt-5 bg-gray-900 text-white">
            <div className="border-b grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-10">
                <div className="mb-5 lg:mb-0">
                    <img src="/image/1.png" alt="" className="h-[100px] w-[100px] object-fill" />
                </div>
                <div className="mb-5 lg:mb-0" >
                    <FaBell className="text-2xl mb-2" />
                    <Link to="/About" className="text-xl">Want To Work With Us?</Link>
                </div>
                <div className="mb-5 lg:mb-0">
                    <FaFileCirclePlus className="text-2xl mb-2" />
                    <p className="text-xl">Want to know more about</p>
                    <Link to="/About" className="text-md underline">KAPURIYA ENTERPRISE</Link>
                </div>
                <div className="mb-5 lg:mb-0">
                    <FaHeadphones className="text-2xl mb-2" />
                    <p className="text-xl">Need Any Help ?</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10">
                <div className="mb-3 lg:mb-0">
                    <p className="text-2xl font-bold mb-2">Company</p>
                    <p className="my-3">
                        <Link to="/Contact">Our History</Link>
                    </p>
                    <p className="my-3">
                        <Link to="/Contact">Contact Us</Link>
                    </p>
                </div>
                <div className="mb-3 lg:mb-0">
                    <p className="text-2xl font-bold mb-2">Contact US</p>
                    <Link to="whatsapp://send?text=Hello World!&phone=+919537580008" className="flex gap-2 items-center  my-3">
                        <FaPhone /> +91 9537580008
                    </Link>
                    <Link to="https://mail.google.com/mail/u/0/#inbox?compose=new/to:j.kapuriya80008@gmail.com" className="flex gap-2 items-center my-3">
                        <MdEmail /> j.kapuriya80008@gmail.com
                    </Link>
                    <Link to="http://maps.google.com?q=21.236456986761322,72.86176737995184" className="flex gap-2 items-center my-3">
                        <FaLocationDot /> 114, Amora Arcade, Surat, Gujarat, INDIA
                    </Link>
                </div>
                <div className="mb-3 lg:mb-0">
                    <p className="text-2xl font-bold mb-2">About Us</p>
                    <p>We from Kapuriya enterprise. Hence, We offers a large selection of premium conventional spices and oilseeds. We guarntees the freshness and quality of our products as we are sustainably sourcing directly from farmers. If you are a retailer or wholesaller who looking to carry our products then we welcome to you in our world.</p>
                    <div className="flex gap-2  mt-3">
                    <Link to="https://www.facebook.com/profile.php?id=100086522632612" className="rounded-full hover:bg-[white] hover:text-black">
                        <FaFacebookF className="border rounded-full text-4xl p-2" />
                    </Link>
                    <Link to="https://www.instagram.com/jayeshkapuriya?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D" className="rounded-full hover:bg-[white] hover:text-black">
                        <FaInstagram className="border rounded-full text-4xl p-2" />
                    </Link>
                    <Link to="https://www.linkedin.com/in/jayesh-kapuriya-b6644424a" className="rounded-full hover:bg-[white] hover:text-black">
                        <FaLinkedinIn className="border rounded-full text-4xl p-2" />
                    </Link>
                    <Link to="whatsapp://send?text=Hello World!&phone=+919537580008" className="rounded-full hover:bg-[white] hover:text-black">
                    <FaWhatsapp className="border rounded-full text-4xl p-2" />
                </Link>
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
};

export default Footer;
