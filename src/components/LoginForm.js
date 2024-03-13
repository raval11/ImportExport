import axios from "axios";
import React, {useState} from "react";
import {BaseUrl} from "./BaseUrl";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

const LoginForm = () => {
    const nevigate = useNavigate();
    const [GetData, setData] = useState({
        email: "",
        password: "",
    });

    const changes = (event) => {
        const {name, value} = event.target;
        setData((data) => {
            return {
                ...data,
                [name]: value,
            };
        });
    };

    const submit = async (event) => {
        try {
            event.preventDefault();
            const responce = await axios.post(BaseUrl + "/login", GetData);
            toast.success(responce.data.message);
            if (responce.data.success) {
            const token = responce.data.chatgpt
            localStorage.setItem("chatgpt", token);
            nevigate("/");
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <section className="flex justify-center items-center h-[70vh]">
            <div className="p-5  w-full sm:w-[50%] mx-auto rounded-md forms">
                <p className="text-center text-2xl font-bold mb-4">Admin Login</p>
                <form className="space-y-4 ">
                    <div className="flex flex-col">
                        <label htmlFor="email" className="mb-1">
                            Email
                        </label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            className="border border-gray-300 p-2 rounded-md focus:outline-none"
                            onChange={changes}
                            value={GetData.email}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password" className="mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="border border-gray-300 p-2 rounded-md focus:outline-none"
                            onChange={changes}
                            value={GetData.password}
                        />
                    </div>

                    <div className="flex justify-center">
                        <button
                            className="bg-white text-black px-4 py-2 rounded-md focus:outline-none customebtn"
                            onClick={submit}
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default LoginForm;
