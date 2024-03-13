import axios from "axios";
import React, {useState} from "react";
import {CountryRegionData} from "react-country-region-selector";
import {BaseUrl} from "./BaseUrl";
import {toast} from "react-toastify";
import {FaPhone} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import {FaLocationDot} from "react-icons/fa6";

const Form = () => {
    const [GetData, SetData] = useState({
        name: "",
        email: "",
        phone: "",
        contry: "",
        question: "",
    });

    const changes = (event) => {
        const {name, value} = event.target;
        SetData((data) => {
            return {
                ...data,
                [name]: value,
            };
        });
    };

    const emailValidation = (email) => {
        // Regular expression for email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };


    const SubmitForm = async (event) => {
        try {
            event.preventDefault();

            if (!GetData.name || !GetData.email || !GetData.phone || !GetData.contry || !GetData.question) {
                toast.error("Please fill in all fields.");
                return;
            }
            if (!emailValidation(GetData.email)) {
                toast.error("Please enter a valid email address.");
                return;
            }

            const response = await axios.post(BaseUrl + "/sendmail", GetData);
            console.log(response);
            toast.info(response.data.message);
            if (response.data.success === true) {
                SetData({
                    name: "",
                    email: "",
                    phone: "",
                    contry: "",
                    question: "",
                });
            }
        } catch (error) {
            console.error(error);
            toast.error("Error submitting form. Please try again later.");
        }
    };

    const ResetForm = (event) =>{
        event.preventDefault();
        SetData({
            name: "",
            email: "",
            phone: "",
            contry: "",
            question: "",
        });
    }

    return (
        <section className="flex justify-center items-center h-auto mb-2 flex-col">
            <p className="font-bold text-center mt-4 mb-2">Contact Us</p>
            <p className="font-bold text-center text-4xl">Don't Hesisted To Contact Us</p>

            <div className="py-4 md:px-12 px-2 lg:w-[90%] w-full flex flex-col gap-5 lg:flex-row  lg:justify-between mt-5">
                <div className="flex items-center gap-4 ">
                    <div className="bg-white rounded-full">
                        <FaPhone className="border rounded-full text-4xl p-2" />
                    </div>
                    <div>
                        <p>Phone Number</p>
                        <p>+91 9537580008</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 ">
                    <div className="bg-white rounded-full">
                        <MdEmail className="border rounded-full text-4xl p-2" />
                    </div>
                    <div>
                        <p>Email</p>
                        <p>j.kapuriya80008@gmail.com</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 ">
                    <div className="bg-white rounded-full">
                        <FaLocationDot className="border rounded-full text-4xl p-2" />
                    </div>
                    <div>
                        <p>Location</p>
                        <p>114, Amora Arcade, Surat, Gujarat, INDIA</p>
                    </div>
                </div>
            </div>

            <div className="p-10 md:w-[70%] w-[95%] mx-auto mt-10 rounded-xl forms ooo">
                <p className="text-center text-2xl font-bold mb-4 text-white">INQUIRY</p>
                <form action="">
                    <div className="grid grid-cols-5">
                        <div className="my-7 text-white"> Name</div>
                        <div className="col-start-2 col-end-6 ">
                            <div className="flex items-center gap-5">
                                <p className="my-5 text-white">:</p>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    onChange={changes}
                                    className="border border-gray-300 p-2 rounded-xl focus:outline-none w-full my-5"
                                    value={GetData.name}
                                    required
                                />
                            </div>
                        </div>
                        <div className="my-7  text-white"> Email</div>
                        <div className="col-start-2 col-end-6">
                            <div className="flex items-center gap-5">
                                <p className="my-5  text-white">:</p>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="border border-gray-300 p-2 rounded-xl focus:outline-none w-full my-5"
                                    onChange={changes}
                                    value={GetData.email}
                                    required
                                />
                            </div>
                        </div>
                        <div className="my-7 text-white"> Phone No</div>
                        <div className="col-start-2 col-end-6">
                            <div className="flex items-center gap-5">
                                <p className="my-5  text-white">:</p>
                                <input
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    className="border border-gray-300 p-2 rounded-xl focus:outline-none w-full my-5"
                                    onChange={changes}
                                    value={GetData.phone}
                                    required
                                />
                            </div>
                        </div>
                        <div className="my-7 text-white"> Country</div>
                        <div className="col-start-2 col-end-6">
                            <div className="flex items-center gap-5">
                                <p className="my-5 text-white">:</p>
                                <select
                                    name="contry"
                                    id="contry"
                                    className="border border-gray-300 p-2 rounded-xl focus:outline-none w-full my-5"
                                    onChange={changes}
                                    value={GetData.contry}
                                    required
                                >
                                <option>Choose Your Contry</option>
                                    {CountryRegionData.length > 0
                                        ? CountryRegionData.map((data, index) => (
                                              <option key={index} value={data[0]}>
                                                  {data[0]}
                                              </option>
                                          ))
                                        : null}
                                </select>
                            </div>
                        </div>
                        <div className="my-7 text-white">Question</div>
                        <div className="col-start-2 col-end-6">
                            <div className="flex gap-5 items-start">
                            <p className="my-5  text-white">:</p>
                                <textarea
                                    name="question"
                                    id="question"
                                    rows="5"
                                    className="border border-gray-300 p-2 rounded-xl focus:outline-none resize-none w-full my-5"
                                    onChange={changes}
                                    value={GetData.question}
                                    required
                                ></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end gap-2">
                        <button
                            className="bg-white text-black px-4 py-2 rounded-xl focus:outline-none customebtn border"
                            onClick={SubmitForm}
                        >
                            Submit
                        </button>
                        <button 
                        className="bg-white text-black px-4 py-2 rounded-xl focus:outline-none customebtn border"
                        onClick={ResetForm}
                    >
                        Reset
                    </button>
                    </div>
                </form>
            </div>

            <div></div>
        </section>
    );
};

export default Form;

// <form className="space-y-4 ">
// <div className="flex flex-col">
//     <label htmlFor="name" className="mb-1">
//         Name
//     </label>
//     <input
//         type="text"
//         name="name"
//         id="name"
//         onChange={changes}
//         className="border border-gray-300 p-2 rounded-xl focus:outline-none"
//         value={GetData.name}
//     />
// </div>
// <div className="flex flex-col">
//     <label htmlFor="email" className="mb-1">
//         Email
//     </label>
//     <input
//         type="email"
//         name="email"
//         id="email"
//         className="border border-gray-300 p-2 rounded-xl focus:outline-none"
//         onChange={changes}
//         value={GetData.email}
//     />
// </div>
// <div className="flex flex-col">
//     <label htmlFor="phone" className="mb-1">
//         Phone No
//     </label>
//     <input
//         type="text"
//         name="phone"
//         id="phone"
//         className="border border-gray-300 p-2 rounded-xl focus:outline-none"
//         onChange={changes}
//         value={GetData.phone}
//     />
// </div>
// <div className="flex flex-col">
//     <label htmlFor="country" className="mb-1">
//         Country
//     </label>
//     <select
//         name="contry"
//         id="contry"
//         className="border border-gray-300 p-2 rounded-xl focus:outline-none"
//         onChange={changes}
//         value={GetData.contry}
//     >
//         {CountryRegionData.length > 0
//             ? CountryRegionData.map((data, index) => (
//                   <option key={index} value={data[0]}>
//                       {data[0]}
//                   </option>
//               ))
//             : null}
//     </select>
// </div>
// <div className="flex flex-col">
//     <label htmlFor="question" className="mb-1">
//         Question
//     </label>
//     <textarea
//         name="question"
//         id="question"
//         rows="5"
//         className="border border-gray-300 p-2 rounded-xl focus:outline-none resize-none"
//         onChange={changes}
//         value={GetData.question}
//     ></textarea>
// </div>
// <div className="flex justify-center">
//     <button
//         className="bg-white text-black px-4 py-2 rounded-xl focus:outline-none customebtn"
//         onClick={SubmitForm}
//     >
//         Submit
//     </button>
// </div>
// </form>
