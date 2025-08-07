import React from 'react'
import Button from './Button'
import { abril, Barber, BlogPost, inter } from '@/app/constants'
import Image from 'next/image'
import { LucideInstagram as InstagramIcon, FacebookIcon as FacebookIcon, TwitterIcon as TwitterIcon} from 'lucide-react';
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons/faSquareInstagram';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
    barber: Barber
}


const BarbersCard = ({ barber }: Props) => {
    return (
        <div
            className=' mx-auto w-[300px] sm:w-[350px] bg-[#212121] lg:w-[400px]'
        >
            <div className="h-[290px] relative flex items-center flex-col justify-end overflow-hidden mb-6">
                <Image
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 300px"
                    alt={barber.alt}
                    src={barber.imageUrl}
                    className='object-cover'
                />
            </div>
            <div className='p-4 flex items-center justify-center flex-col'>
                <h3 className={`${abril.className} text-center text-[24px] text-white`}>
                    {barber.name}
                </h3>
                <div className='flex my-6 justify-center gap-8 w-full'>
                    <InstagramIcon size={28} color="#E9C664"  />
                    <FacebookIcon size={28} color="#E9C664"  />
                    <TwitterIcon size={28} color="#E9C664"  />        
                </div>
                <Button className='mx-auto mb-[25px] font-semibold hover:bg-themeYellow hover:text-black'>BOOK</Button>
            </div>
        </div>
    )
}

export default BarbersCard