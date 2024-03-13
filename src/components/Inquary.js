import React, {useEffect, useState} from "react";
import {BaseUrl} from "./BaseUrl";
import {toast} from "react-toastify";
import axios from "axios";

const Inquary = () => {
    const [data, setdata] = useState([]);
    const [GetCount,setCount] = useState(0);

    const setApiData = async () => {
        try {
            const data = await axios.get(BaseUrl + "/ShowInquary");
            setdata(data.data.data);
        } catch (error) {
            toast.error(error);
        }
    };

    useEffect(() => {
        setApiData();
    }, [GetCount]);

    const deleteInquary = async(id) => {
        try{
            console.log(id)
            console.log(`${BaseUrl}/DeleteInquary/${id}`)
              const data = await axios.delete(`${BaseUrl}/DeleteInquary/${id}`)
              console.log(data)
              if(data.data.success === true) {
                  toast.success("Inquary Deleted Successfully") 
                  setCount(GetCount + 1 )
            }else{
                toast.error("Inquary Not Deleted")
            }


        }catch(error){
            toast.error(error);
        }
    }

    return (
        <>
        <div className="w-[100%] bg-white">
        <p className="text-center text-xl mt-2">Inquary Data</p>
                <div className=" mx-auto md:w-[90%] w-[100%]  text-gray-900 ">
                    <div class="overflow-x-auto p-5">
                        <table class="table-auto min-w-full divide-y divide-gray-200 border mt-5  border-gray-900">
                            <thead>
                                <tr>
                                    <th class="px-6 border py-3 backl text-xs font-medium uppercase tracking-wider text-left">
                                        Index
                                    </th>
                                    <th class="px-6 border  py-3 backl text-xs font-medium uppercase tracking-wider text-left">
                                        Name
                                    </th>
                                    <th class="px-6 border py-3 backl text-xs font-medium uppercase tracking-wider text-left">
                                        Email
                                    </th>
                                    <th class="px-6 border py-3 backl text-xs font-medium uppercase tracking-wider text-left">
                                        Contry
                                    </th>
                                    <th class="px-6 border py-3 backl text-xs font-medium uppercase tracking-wider text-left">
                                        Phone
                                    </th>
                                    <th class="px-6 border py-3 backl text-xs font-medium uppercase tracking-wider text-left">
                                        Question
                                    </th>
                                    <th class="px-6 border py-3 backl text-xs font-medium uppercase tracking-wider text-left">
                                        Delete
                                    </th>
                                </tr>
                            </thead>
                            <tbody class=" divide-y divide-gray-200 text-sm">
                                {data.map((data, index) => (
                                    <tr className="backl">
                                        <td class="px-6 py-4 whitespace-nowrap border">{index}</td>
                                        <td class="px-6 py-4 whitespace-nowrap border">{data.name}</td>
                                        <td class="px-6 py-4 whitespace-nowrap border">{data.email}</td>
                                        <td class="px-6 py-4 whitespace-nowrap border">{data.contry}</td>
                                        <td class="px-6 py-4 whitespace-nowrap border">{data.phone}</td>
                                        <td class="px-6 py-4 whitespace-break-spaces border">{data.question}</td>
                                        <td class="px-6 py-4 whitespace-break-spaces border"><button className="border rounded-lg bg-red-500 px-4 py-2 text-white" onClick={()=>deleteInquary(data._id)}>Delete</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Inquary;
