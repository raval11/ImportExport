import React, {useEffect, useState} from "react";
import {FaUser} from "react-icons/fa";
import {Link} from "react-router-dom";
import {RiMenu3Line} from "react-icons/ri";

const Navbar = () => {
    const [getMenu, setMenu] = useState(false);
    let [count, Setcount] = useState(0);
    const token = localStorage.getItem("chatgpt");

    const clicki = () => {
        setMenu(!getMenu);
    };

    const logout = () => {
        localStorage.clear();
        Setcount(count + 1);
    };

    useEffect(() => {}, [count]);

    return (
        <>
            <header className="md:h-[80px] shadow-md w-[100%] flex items-center bg-gray-900 text-white border-white border-b-2">
                <nav className="flex justify-between mx-auto w-[90%]  items-center">
                    <div className="flex items-center gap-3">
                        <Link to="/">
                            <img src="/image/1.png" alt="" className="h-[60px] w-[60px]" />
                        </Link>
                        <div>
                            <p className="text-2xl border-b border-white">KAPURIYA ENTERPRISE</p>
                            <p className="text-white text-center">Import / Export</p>
                        </div>
                    </div>
                    <div className="md:block hidden">
                        <ul className="flex list-none justify-between gap-5 justify-end">
                            <li>
                                <Link to="/" className="linking">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/Product" className="linking">
                                    Product
                                </Link>
                            </li>
                            <li>
                                <Link to="/About" className="linking">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/Contact" className="linking">
                                    Contact
                                </Link>
                            </li>
                            <li>   
                            {token == null || token === "" || token == undefined ? null : (
                                <Link to="/" onClick={logout} className="linking">
                                Logout
                            </Link>
                            )}
                            </li>
                        </ul>
                    </div>
                    {token == null || token === "" || token === undefined ? null : (
                        <div className="flex  gap-5 items-center">
                           
                            {token == null || token == "" || token == undefined ? null : (
                                <Link to="/Inquary">
                                    <FaUser />
                                </Link>
                            )}
                          
                        </div>
                    )}

                    <div className="md:hidden block ">
                        <RiMenu3Line onClick={clicki} />
                    </div>
                </nav>
            </header>

            {getMenu ? (
                <div>
                    <ul className="block md:hidden list-none text-center">
                        <li className="shadow-md p-2">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="shadow-md md p-2">
                            <Link to="/Product">Product</Link>
                        </li>
                        <li className="shadow-md md p-2">
                            <Link to="/About">About</Link>
                        </li>
                        <li className="shadow-md md p-2">
                            <Link to="/Contact">Contact</Link>
                        </li>
                        {token == null || token == "" || token == undefined ? null : (
                            <li className="shadow-md md p-2">
                                <Link to="/" onClick={logout}>
                                    Logout
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            ) : null}
        </>
    );
};

export default Navbar;



// <div className="md:hidden block ">
// <RiMenu3Line onClick={clicki} />
// </div>

// {token == null || token == "" || token == undefined ? null : (
//     <Link to="/" onClick={logout} className="none md:block">
//         Logout
//     </Link>
// )}