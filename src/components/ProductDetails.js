import React, {useEffect, useState} from "react";
import {BaseUrl} from "./BaseUrl";
import {Link, useParams} from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
    const [getData, setData] = useState([]);
    const [GetImage,SetImage] = useState("")
    const [onClicks,setClick] = useState(false)
    const {id} = useParams();

    const FetchApiData = async () => {
        const responce = await axios.post(BaseUrl + "/GetOneProduct", {_id: id});
        console.log(responce.data.Product);
        setData(responce.data.Product);
    };

    const ImageSet = (image) =>{
        SetImage(image)
        setClick(true)
    }

    useEffect(() => {
        FetchApiData();
    }, []);

    return (
        <div className="container mx-auto mt-8 w-[90%] relative">

        
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <div className="mb-6">
                        <h1 className="text-3xl font-bold mb-2">{getData.ProductName}</h1>
                        <p className="text-gray-600 text-xl text-justify">Category : {getData.Category}</p>
                    </div>
                    <p>{getData.Discription}</p>

                    <div className="mt-5">
                        <Link
                            to="/Contact"
                            className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                        >
                            Click To INQUIRY
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    {/* Right side content such as price, add to cart button, etc. */}
                    <div className="grid grid-cols-1 gap-2 mb-4">
                        {getData.productImage && getData.productImage.length > 0 ? (
                            onClicks ?  <img
                            src={GetImage }
                            alt="Big Product Image"
                            className=" rounded-lg shadow-md h-[300px] w-[350px] object-fill"/> : <img
                            src={`http://localhost:8000/Product/${getData.productImage[0]}`}
                            alt="Big Product Image"
                            className=" rounded-lg shadow-md h-[300px] w-[350px] object-fill"/>
                           
                        ) : (
                            <p>No  product image available</p>
                        )}
                    </div>
                    <div className="grid lg:grid-cols-4 grid-cols-2 gap-4">
                        {getData.productImage && getData.productImage.length > 1 ? (
                            getData.productImage
                            .slice(1, 5)
                            .map((image, index) => (
                                <img
                                    key={index}
                                    src={`http://localhost:8000/Product/${image}`}
                                    alt={`Product Image ${index + 1}`}
                                    className="object-fill rounded-lg shadow-md h-[150px] w-[150px]"
                                    onClick={()=>ImageSet(`http://localhost:8000/Product/${image}`)}
                                />
                            ))
                        ) : (
                            <p>No additional product images available</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;

                    