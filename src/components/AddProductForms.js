import axios from "axios";
import React, {useState} from "react";
import {BaseUrl} from "./BaseUrl";
import {toast} from "react-toastify";
import {IoIosCloseCircle} from "react-icons/io";

const AddProductForms = ({setShow}) => {
    const [productData, setProductData] = useState({
        ProductName: "",
        Category: "OilSeeds",
        Discription: "",
    });

    const [images, setImages] = useState([]);

    const handleImageChange = (event) => {
        setImages([...event.target.files]);
    };

    const changes = (event) => {
        const {name, value} = event.target;
        setProductData((data) => {
            return {
                ...data,
                [name]: value,
            };
        });
    };

    console.log(images);

    const SubmitForm = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("ProductName", productData.ProductName);
        formData.append("Category", productData.Category);
        formData.append("Discription", productData.Discription);
        images.forEach((images) => {
            formData.append("productImage", images);
        });

        try {
            const responce = await axios.post(BaseUrl + "/AddProduct", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            console.log("Response:", responce.data);
            toast.success("Product added successfully");
        } catch (error) {
            console.error(error);
            toast.error("Error adding product");
        }

        setShow(false);
    };

    const closePopup = () => {
        setShow(false);
    };

    return (
        <section className="flex justify-center items-center h-auto">
            <div className="p-5  w-full sm:w-[50%] md:w-[80%] lg:w-[50%] mx-auto mt-10 rounded-md forms bg-white">
                <div className="flex w-[90%] justify-between mx-auto items-center">
                    <p className="text-center text-2xl font-bold mb-4">ADD PRODUCT</p>
                    <IoIosCloseCircle onClick={closePopup} />
                </div>
                <form className="space-y-4 ">
                    <div className="flex flex-col">
                        <label htmlFor="name" className="mb-1">
                            ProductName
                        </label>
                        <input
                            type="text"
                            name="ProductName"
                            id="ProductName"
                            className="border border-gray-300 p-2 rounded-md focus:outline-none"
                            onChange={changes}
                            value={productData.ProductName}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="Category" className="mb-1">
                            Category
                        </label>
                        <select
                            name="Category"
                            id="Category"
                            className="border border-gray-300 p-2 rounded-md focus:outline-none"
                            onChange={changes}
                            value={productData.Category}
                        >
                            <option value="OilSeeds">Oil Seeds</option>
                            <option value="OtherProduct">Other Product</option>
                            <option value="NaturalProduct">Natural Product</option>
                            <option value="Spices">Spices</option>
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="question" className="mb-1">
                                            Discription
                        </label>
                        <textarea
                            name="Discription"
                            id="Discription"
                            rows="2"
                            className="border border-gray-300 p-2 rounded-md focus:outline-none resize-none"
                            onChange={changes}
                            value={productData.Discription}
                        ></textarea>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="name" className="mb-1">
                            Image
                        </label>
                        <input
                            type="file"
                            name="ProductName"
                            multiple
                            id="ProductName"
                            className="border border-gray-300 p-2 rounded-md focus:outline-none"
                            onChange={handleImageChange}
                        />
                    </div>

                    <div className="flex justify-end gap-2">
                        <button
                            className="bg-white text-black px-4 py-2 rounded-md focus:outline-none customebtn border"
                            onClick={SubmitForm}
                        >
                            Add
                        </button>
                        <button
                            className="bg-white text-black px-4 py-2 rounded-md focus:outline-none customebtn border"
                            onClick={closePopup}
                        >
                            Cancle
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default AddProductForms;
