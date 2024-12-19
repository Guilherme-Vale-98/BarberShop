import { abril, inter } from '@/app/constants'
import React from 'react'
import Button from './Button'

type Props = {}

const ContactForm = (props: Props) => {
    return (
        <section className=' bg-black flex flex-wrap items-center justify-center md:flex-nowrap gap-10 text-white pt-[90px] pb-[60px] px-[20px] md:px-[60px]'>
            <div className=' flex items-center flex-col md:w-1/2'>
                <div className=' flex items-center flex-col '>
                    <h2 className={`${abril.className} text-center  text-[55px] `} >Come Visit Us</h2>
                    <div className='mt-[22px] text-center'>
                        <div className={`${abril.className} text-[24px]`} > Office </div>
                        <div className={`${inter.className} text-[20px] w-2/3 mx-auto`} > 304 North Cardinal St. Dorchester
                            Center, MA 02124</div>
                    </div>
                    <div className='mt-[22px] text-center'>
                        <div className={`${abril.className} text-[24px]`} > Contact </div>
                        <div className={`${inter.className} text-[20px] mx-auto w-2/3`} > info@company.com
                            contact@company.com</div>
                    </div>
                    <div className='mt-[22px] text-center'>
                        <div className={`${abril.className} text-[24px]`} > Working Hours </div>
                        <div className={`${inter.className} text-[20px] mx-auto w-2/3`} > Monday-Saturday 10am - 6pm
                            Sunday 10am - 14pm</div>
                    </div>

                </div>

            </div>
            <form className={`${inter.className} w-full md:w-[70%] bg-[#212121] p-10`} >
                <div className='grid mb-6 grid-cols-1 md:grid-cols-2 gap-6'>
                    <div>
                        <label htmlFor="name" className='mb-2'>
                            Your name
                        </label>
                        <input className='w-full text-black outline-none px-4 py-2' type='text' id='name' />
                    </div>
                    <div>
                        <label htmlFor="email" className='mb-2'>
                            Your email
                        </label>
                        <input className='w-full text-black outline-none px-4 py-2' type='text' id='email' />
                    </div>
                </div>
                <div className='mb-6'>
                    <label htmlFor="subject">
                        Subject
                    </label>
                    <input className='w-full text-black outline-none px-4 py-2' type='text' id='subject' />
                </div>
                <div className='mb-6'>
                    <label htmlFor="subject">
                        Your message
                    </label>
                    <textarea className='w-full resize-none text-black outline-none px-4 py-2' rows={6} id='message' />
                </div>
                <Button className='w-full bg-themeYellow font-semibold !text-black text-[20px]'>Book Appointment</Button>
            </form>

        </section>
    )
}

export default ContactForm