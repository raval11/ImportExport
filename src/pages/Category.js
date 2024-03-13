import axios from "axios";
import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {BaseUrl} from "../components/BaseUrl";
import {toast} from "react-toastify";

const Category = () => {
    const {name} = useParams();
    const [products, setProducts] = useState([]);
    console.log(products);

    useEffect(() => {
        SearchApi();
    }, []);

    const SearchApi = async () => {
        try {
            const data = await axios.post(`${BaseUrl}/GetProductByCategory`, {
                Category: name,
            });
            console.log(data.data.Product)
            setProducts(data.data.Product);
        } catch (error) {
            toast.error(error);
        }
      }

    return <>
    <p className="text-2xl font-bold px-20 py-5">{name}</p>
    <div className="w-[90%] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5 relative">
    
    {products.length > 0 || products != null ? (
        products.map((data, index) => (
            <div className="relative">
                <Link
                    to={`/product/${data._id}`}
                    key={index}
                    className="rounded-md flex flex-col items-center p-3 shadow-sm shadow-black "
                >
                    <img
                        src={`http://localhost:8000/Product/${data.productImage[0]}`}
                        alt=""
                        className="w-[300px] h-[200px] rounded-md object-fill"
                    />
                    <p className="text-center md:text-xl text-sm font-bold mt-2 break-words ">{data.ProductName}</p>
                </Link>
            </div>
        ))
    ) :   <h1 className="text-cente">No Result Found...</h1>
    }

    
</div>
      </>
}

export default Category;
