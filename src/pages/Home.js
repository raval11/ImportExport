import React from "react";
import WorkInProgress from "../components/WorkInProgress";
import FAQ from "../components/FAQ";

const Home = () => {
    // backgroundImage: `url("/image/ship.jpg")`
    return (
        // Hero Section
        <>
            <section className="relative ">
                <div className="h-[90vh] w-full dd bg-gray-900" style={{ backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}} >
                    <div className="h-[60%] md:w-[90%] mx-auto flex items-center justify-center md:absolute md:top-1/2 md:left-1/2 md-transform md:-translate-x-1/2 md:-translate-y-1/2">
                        <div className="w-full md:w-[50%] px-4">
                            <p className="text-4xl text-center text-white my-3">KAPURIYA ENTERPRISE</p>
                            <p className="text-center text-md text-white text-sm">
                            We from Kapuriya enterprise. Hence, We offers a large selection of premium conventional spices and oilseeds. We guarntees the freshness and quality of our products as we are sustainably sourcing directly from farmers. If you are a retailer or wholesaller who looking to carry our products then we welcome to you in our world.
                                </p>
                        </div>
                    </div>
                </div>
            </section>
           
            <WorkInProgress/>
            <FAQ/>
        </>
    );
};

export default Home;

