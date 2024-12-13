import { abril, contactInfos, inter } from '@/app/constants'
import Image from 'next/image'
import React from 'react'
import ContactItem from './ContactItem'

type Props = {}

const ContactUs = (props: Props) => {
    return (
        <section className='px-14 md:px-[72px] py-[40px]'>
            <div className='mb-[60px]'>
                <p className={`${abril.className} text-center text-[45px]`}>CONTACT US</p>
                <p className={`${inter.className} w-[60%] text-center mx-auto`}>Duis pretium gravida enim, vel maximus ligula fermentum a. Sed rhoncus eget ex id egestas. Nam nec
                    nisl placerat, tempus erat a, condimentum metusurabitur nulla nisi.</p>
            </div>
            <div className='flex gap-10 md:gap-0 flex-wrap lg:flex-nowrap sm:px-20 justify-center lg:justify-between '>
                {contactInfos.map(contactInfo => <ContactItem contactInfo={contactInfo}/>)}
            </div>
        </section>
    )
}

export default ContactUs