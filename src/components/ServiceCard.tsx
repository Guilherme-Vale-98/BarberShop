"use client";
import { abril, inter, Service } from "@/app/constants";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

type Props = {
    service: Service;
};

const ServiceCard = ({ service }: Props) => {
    const pathname = usePathname()
    return (
        <motion.div
            key={service.id}
            className={`border border-themeYellow md:h-[310px] ${pathname ==="/services"? "md:w-[30%]" : "md:w-[45%]"} p-8 flex flex-col items-center text-center`}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }} 
            viewport={{ once: true, amount: 0.1 }} 
            transition={{
                duration: 0.5,
                delay: service.id * 0.2, 
                ease: "easeOut",
            }}
        >
            <div className="h-[100px] flex items-center flex-col justify-end overflow-hidden mb-6">
                <Image
                    alt={service.alt}
                    src={service.iconUrl}
                    className="object-contain max-h-[80px]"
                />
            </div>
            <h3 className={`${abril.className} text-[20px] text-white`}>
                {service.title}
            </h3>
            <p className={`${inter.className} text-[14px] text-gray-300 mt-2`}>
                {service.description}
            </p>
        </motion.div>
    );
};

export default ServiceCard;
