import { abril, inter, Service } from '@/app/constants'
import Image from 'next/image'
import React from 'react'

type Props = {
    service: Service
}

const ServiceCard = ({ service }: Props) => {
    return (
        <div
            key={service.id}
            className="border border-themeYellow md:w-[45%] p-8   flex flex-col items-center text-center"
        >
            <div className=" h-[100px] flex items-center flex-col justify-end overflow-hidden mb-6">
                <Image
                    alt={service.alt}
                    src={service.iconUrl}

                    className='object-contain max-h-[80px]'                />
            </div>
            <h3 className={`${abril.className} text-[20px] text-white`}>
                {service.title}
            </h3>
            <p className={`${inter.className} text-[14px] text-gray-300 mt-2`}>
                {service.description}
            </p>
        </div>
    )
}

export default ServiceCard