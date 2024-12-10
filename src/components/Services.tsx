import Image from "next/image";
import { abril, inter, services } from "../app/constants/index";
import beardTrim from "../../public/beardTrim.png";
import React from "react";
import ServiceCard from "./ServiceCard";
import Button from "./Button";

type Props = {};

const Services = (props: Props) => {
    return (
        <section className="w-full bg-black -z-20 pb-10 overflow-hidden text-white relative">
            <div className="text-center pt-10 w-full">
                <h4 className={`${inter.className} text-[19px] text-themeYellow`}>
                    OUR TREATMENT
                </h4>
                <h2 className={`${abril.className} text-[50px] text-white`}>
                    SERVICES
                </h2>
            </div>
            <div className="absolute inset-0 -z-10">
                <Image
                    alt="trimming beard"
                    src={beardTrim}
                    fill
                    className="hidden md:block md:translate-x-[18rem] object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8 px-4 sm:px-6 md:px-8 lg:px-10 mt-10 min-w-[328px] w-[60%] mx-auto md:mx-0 md:w-[90%] lg:w-[50rem]">
                {services.map((service, index) => (
                    <ServiceCard key={index} service={service} />
                ))}
                <Button className={`${inter.className} font-semibold mx-auto !text-themeYellow`}>EXPLORE NOW</Button>
            </div>
        </section>
    );
};

export default Services;