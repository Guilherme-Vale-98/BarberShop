import Image, { StaticImageData } from "next/image";
import { abril, inter, services } from "../app/constants/index";
import React from "react";
import ServiceCard from "./ServiceCard";
import Button from "./Button";

type Props = {
    img: StaticImageData
    showTitle: boolean
};

const renderCards = (showTitle: boolean)=>{
    if(!showTitle){
        return (
            <div className="flex flex-wrap items-center justify-center gap-8 px-4 sm:px-6 md:px-8 lg:px-10 mt-10 min-w-[328px] w-[60%] mx-auto md:w-[90%]">
                {services.map((service, index) => (
                    <ServiceCard key={index} service={service} />
                ))}
                { showTitle && <Button className={`${inter.className} font-semibold mx-auto !text-themeYellow`}>EXPLORE NOW</Button>}
        </div>
        )
    }

    return(
        <div className="flex flex-wrap items-center justify-center gap-8 px-4 sm:px-6 md:px-8 lg:px-10 mt-10 min-w-[328px] w-[60%] mx-auto md:mx-0 md:w-[90%] lg:w-[50rem]">
                {services.slice(0,4).map((service, index) => (
                    <ServiceCard key={index} service={service} />
                ))}
                { showTitle && <Button className={`${inter.className} font-semibold mx-auto !text-themeYellow`}>EXPLORE NOW</Button>}
        </div>
    )
}

const Services = ({img, showTitle}: Props) => {
    return (
        <section className="w-full bg-black -z-20 pb-10 overflow-hidden text-white relative">
            <div className="absolute inset-0 -z-10">
                <Image
                    src={img}
                    alt="Background image"
                    fill
                    className="object-cover opacity-30"
                    priority
                />
            </div>
            {showTitle && <div className="text-center pt-10 w-full">
                <h4 className={`${inter.className} text-[19px] text-themeYellow`}>
                    OUR TREATMENT
                </h4>
                <h2 className={`${abril.className} text-[50px] text-white`}>
                    SERVICES
                </h2>
            </div>}
            {renderCards(showTitle)}
            
        </section>
    );
};

export default Services;