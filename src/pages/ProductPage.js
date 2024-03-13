import React, {useState} from "react";
import ProductCard from "../components/ProductCard";
import AddProductForms from "../components/AddProductForms";
import {Link} from "react-router-dom";

const ProductPage = () => {
    const token = localStorage.getItem("chatgpt");
    const [getShow, setShow] = useState(false);
    const AddProductForm = () => {
        setShow(true);
    };

    return (
        <>
            <div>
                <div className="w-[70%] mx-auto mt-5">
                    <div className="grid  md:grid-cols-2 grid-cols-1 gap-2 ">
                        <Link to="/Category/Spices" className="md:p-5 p-0 shadow-lg flex justify-center rounded-lg">
                            <img
                                src="/image/categoryImage3.jpg"
                                alt=""
                                className="shadow-md md:object-contain object-cover  rounded-lg"
                            />
                        </Link>
                        <Link to="/Category/OilSeeds" className="md:p-5 p-0 shadow-lg  flex justify-center rounded-lg">
                            <img
                                src="/image/categoryImage1.jpg"
                                alt=""
                                className="shadow-md md:object-contain  object-cover rounded-lg"
                            />
                        </Link>
                        <Link
                            to="/Category/NaturalProduct"
                            className="md:p-5 p-0  shadow-lg flex justify-center rounded-lg"
                        >
                            <img
                                src="/image/categoryImage4.jpg"
                                alt=""
                                className="shadow-md md:object-contain object-cover  rounded-lg"
                            />
                        </Link>
                        <Link
                            to="/Category/OtherProduct"
                            className="md:p-5 p-0 shadow-lg flex justify-center rounded-lg"
                        >
                            <img
                                src="/image/categoryImage2.jpg"
                                alt=""
                                className="shadow-md md:object-contain object-cover rounded-lg"
                            />
                        </Link>
                    </div>
                </div>
                <div className="relative">
                    {token == null || token === "" || token === undefined ? null : (
                        <div className="w-[90%] mx-auto flex justify-end mt-5">
                            <button className="bg-green-600 p-2 rounded-md text-white" onClick={AddProductForm}>
                                + Add Product
                            </button>
                        </div>
                    )}

                    {getShow ? (
                        <div className="popup w-[70%] h-[85vh] absolute mx-auto z-20 lg:left-60 left-20">
                            <AddProductForms setShow={setShow} />
                        </div>
                    ) : (
                        <ProductCard />
                    )}
                </div>
            </div>
        </>
    );
};

export default ProductPage;
