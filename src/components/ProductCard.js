import axios from "axios";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {BaseUrl} from "./BaseUrl";
import {toast} from "react-toastify";

const ProductCard = () => {
    const token = localStorage.getItem("chatgpt");
    const [products, setProducts] = useState([]);
    const [showDelete, setDelete] = useState(false);
    const [getDeletId, setDeleteId] = useState("");

    const FetchProduct = async () => {
        try {
            const responce = await fetch(BaseUrl + "/GetProduct");
            const data = await responce.json();
            setProducts(data.Product);
        } catch (error) {
            toast.error("Error fetching product");
        }
    };

    useEffect(() => {
        FetchProduct();
    }, []);

    const deletes = async (id) => {
        setDelete(true);
        setDeleteId(id);
    };

    const FullDelete = async () => {
        try {
            const responce = await axios.post(BaseUrl + "/DeleteProduct", {
                _id: getDeletId,
            },{headers:{
                'Authorization': token
            }});
            toast.success(responce.data.message);
            if (responce.data.success) {
                setDelete(false);
                FetchProduct();
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    const [category, setCategory] = useState("OilSeeds");

    const searching = async () => {
        const data = await axios.post(`${BaseUrl}/GetProductByCategory`, {
            Category: category,
        });
        setProducts(data.data.Product);
        if (category === "AllProducts") {
            FetchProduct();
        }
    };

    const closeDialog = () => {
        setDelete(false);
    };

    return (
        <div>
            {token == null || token === "" || token === undefined ? null : (
                <div>
                    <div className="w-[90%] mx-auto my-5 flex gap-5">
                        <select
                            className="border w-[400px] border-gray-300 p-2 rounded-md focus:outline-none"
                            onChange={(event) => setCategory(event.target.value)}
                        >
                            <option value="AllProducts">All Products</option>
                            <option value="OtherProduct">OtherProduct</option>
                            <option value="NaturalProduct">NaturalProduct</option>
                            <option value="Spices">Spices</option>
                            <option value="OilSeeds">OilSeeds</option>
                        </select>

                        <button className="px-5 py-3 bg-white rounded-md border" onClick={searching}>
                            Search
                        </button>
                    </div>

                    <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5 relative">
                        {products.length > 0 || products == null ? (
                            products.map((data, index) => (
                                <div className="relative">
                                    <Link
                                        to={`/product/${data._id}`}
                                        key={index}
                                        className="rounded-md flex flex-col auto items-center p-3 shadow-sm shadow-black "
                                    >
                                        <img
                                            src={`http://localhost:8000/Product/${data.productImage[0]}`}
                                            alt=""
                                            className="w-[300px] h-[200px] rounded-md object-fill"
                                        />
                                        <p className="text-center md:text-xl mt-2 text-sm font-bold  ">
                                            {data.ProductName}
                                        </p>
                                    </Link>

                                    {token == null || token === "" || token === undefined ? null : (
                                        <button
                                            className="bg-red-500 p-2 rounded-full absolute top-4 right-4 text-white"
                                            onClick={() => deletes(data._id)}
                                        >
                                            Delete
                                        </button>
                                    )}
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-4xl font-bold">No Product Found....</p>
                        )}

                        {showDelete ? (
                            <div className="p-5 h-[180px] w-[300px] bg-white  absolute top-[10%] right-[10%] md:right-[40%] text-center flex flex-col justify-between rounded-3xl">
                                <p className="text-xl">Are You Sure Delete This Product</p>
                                <div className="flex gap-4 justify-end">
                                    <button
                                        className="px-5 py-3 bg-green-600 rounded-md text-white"
                                        onClick={closeDialog}
                                    >
                                        Cancle
                                    </button>
                                    <button className="px-5 py-3 bg-red-600 rounded-md text-white" onClick={FullDelete}>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ) : null}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductCard;
