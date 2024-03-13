import React from "react";

const WorkInProgress = () => {
    const array = [
        {
            id: 1,
            image: "01.png",
            heding: "Market identification",
            sub_heading: "product analysis as per customer requirements.",
        },
        {
            id: 2,
            image: "02.png",
            heding: "Channel Selection",
            sub_heading: "Inco-Terms,Port Of Loading-Unloading, agent.",
        },
        {
            id: 3,
            image: "03.png",
            heding: "Determining The Payment Terms",
            sub_heading: "advacnce, T/T, L/C, D/P.",
        }
    ];
    return (
        <>
        <pre className="text-center mt-10 text-blue-400 font-bold text-xl">-------- Working Process --------</pre>
        <p className="text-center text-4xl font-bold">We follow some step to complete</p>
        <p className="text-center text-4xl mb-10 font-bold">Consignment</p>
            <div className="w-[90%] mx-auto">
                <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {array.map((item, index) => (
                        <div className="h-[400px]  text-center " id={index}>
                            <div className="h-[70%] w-[100%] flex justify-center">
                                <img src={item.image} alt="" className="object-cover cb" />
                            </div>
                            <div className="text-center mt-6">
                                <p>{item.heding}</p>
                                <p>{item.sub_heading}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default WorkInProgress;
