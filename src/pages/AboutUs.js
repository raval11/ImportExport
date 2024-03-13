import React from "react";
import FAQ from "../components/FAQ";

const AboutUs = () => {
    const companyDetails = [
        {
            field: "Full name of company",
            value: "Kapuriya Enterprise",
        },
        {
            field: "Owner(s) of the company",
            value: "Jayesh Kumar Kapuriya",
        },
        {
            field: "Company Identification Number (CIN)",
            value: "24ANFPK9236Q2ZD",
        },
        {
            field: "Importer-Exporter Code (IEC)",
            value: "ANFPK9236Q",
        },
        {
            field: "Field of Activity (Please be specific)",
            value: "Merchant Exporter of Agriculture and Commodities",
        },
        {
            field: "Email",
            value: "j.kapuriya80008@gmail.com",
        },
        {
            field: "Website",
            value: "https://kapuriyaenterprise.com",
        },
        {
            field: "Phone/Mobile",
            value: "+91 9537580008",
        },
        {
            field: "Full Address",
            value: "114, Amora Arcade, Surat, Gujarat, INDIA",
        }
        
    ];
    return (
        <>

        <div className="w-[90%] mx-auto grid md:grid-cols-2 grid-cols-1 gap-10 mt-10">
            <div>
            <img src="/01.jpg" alt="" className="h-[400px] w-full object-cover" />
            </div>
            <div>
                <pre className="md:mb-5 mb-1 text-blue-400 font-bold text-xl">---------- About Us ----------</pre>
                <p className="font-bold md:text-4xl text-2xl md:mb-5 mb-2">
                    Your goods are in safe hands
                </p>
                <p className="md:mt-8 mt-3 text-gray-600">Kapuriya Enterprise is located at Surat in Gujarat, India . They are Spice Exporters, Spice Suppliers, Spice Traders, Spice Wholesalers of Ajwain, Caraway, Chickpea, Coriander, Cumin Seeds, Dry Red Chilli, Garlic, Ginger, Honey, Mustard, Red Pepper ( Chili ), Sesame seeds etc. in Whole Spice form. Their main business regions are Africa, Asia, Brazil, Brunei, Canada, Egypt, Europe, GCC, Germany, Italy, Middle East, North America, Russia, Saudi Arabia, Singapore, South America etc. The company achieved FSSAI certificate. Kapuriya Enterprise is established in the year 2011.</p>
            </div>
        </div>

            <div className=" md:mx-auto mx-0  md:w-[90%] w-full  text-gray-900 mt-10">
            <p className="text-center text-2xl mt-5">COMPANY DETAILS</p>
                <div className="overflow-hidden overflow-x-auto md:px-20 px-0">
                    <table className="table-auto min-w-full divide-y divide-gray-200 border mt-5 ">
                        <thead>
                            <tr>
                                <th className="px-6 py-3 backl text-xs border   text-gray-900 uppercase tracking-wider text-center font-bold">
                                    Information
                                </th>
                                <th className="px-6 py-3 backl text-xs border   text-gray-900 uppercase tracking-wider text-center font-bold">
                                    Company Details
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-900 divide-y divide-gray-200 text-sm">
                            {companyDetails.map((data, index) => (
                                <tr className="backl">
                                    <td className="px-6 py-4 whitespace-nowrap border">{data.field}</td>
                                    <td className="px-6 py-4 whitespace-nowrap border w-auto">{data.value}</td>
                                </tr>
                            ))}
                            <tr className="backl">
                            
                        
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <FAQ />
        </>
    );
};

export default AboutUs;
