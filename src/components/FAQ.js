import React, {useState} from "react";

const abc = [
    {
        id: 1,
        heading: "What is the year of Estd. of Kapuriya Enterprise?",
        secound: "Kapuriya Enterprise was established in 2020.",
    },
    {
        id: 2,
        heading: "Who is the Proprietor of Kapuriya Enterprise?",
        secound: "Mr Jayesh Kapuriya is the Proprietor of the Kapuriya Enterprise",
    },
    {
        id: 3,
        heading: "What are the main products of this company?",
        secound: "Company deals in red chilli, ajwain seeds, coriander seeds, cumin seed, sesame seed, honey etc.",
    },
    {
        id: 4,
        heading: "What is the business location of Kapuriya Enterprise?",
        secound: "Kapuriya Enterprise operates from Surat.",
    },
    {
        id: 5,
        heading: "How many different products are listed for this company?",
        secound: "Presently more than 1 products are listed among different product categories on Tradeindia.com.",
    },
    {
        id: 6,
        heading: "What are the main categories in which the company is mapped?",
        secound: "The company is mapped in vegetables,oil seeds,dry spices, etc.",
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <>
            <div className="w-[90%] mx-auto my-10">
                <pre className="lg:text-xl font-bold text-center text-blue-400 hidden lg:block">--------------------------------   FAQs    --------------------------------</pre>
                <p className="lg:hidden  text-center md:block hidden  text-blue-400">------------------------------------------- FAQs -------------------------------------------</p>
                <p className="md:hidden block text-center  text-blue-400">-------------------- FAQs --------------------</p>
            </div>

            {abc.map((data, index) => (
                <div
                    key={index}
                    onClick={() => toggleAccordion(index)}
                    className="w-[80%] mx-auto shadow-md border p-5 flex justify-between my-4 transition-all duration-300 ease-in-out  cursor-pointer "
                >
                    <div>
                        <p className="text-[16px] hover:underline">{data.heading}</p>
                        <p
                            className={`${
                                openIndex === index ? "" : "hidden"
                            } transition-all duration-300 ease-in-out text-[rgb(72,77,79)] text-[14px]`}
                        >
                            {data.secound}
                        </p>
                    </div>
                    <div className="mr-3">
                        <p onClick={() => toggleAccordion(index)}>{openIndex === index ? "-" : "+"}</p>
                    </div>
                </div>
            ))}
        </>
    );
};

export default FAQ;
