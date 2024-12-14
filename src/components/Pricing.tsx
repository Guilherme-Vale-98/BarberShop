import { abril, inter, pricingItems } from '@/app/constants'
import product from '../../public/product.webp'
import Image from 'next/image'
import React from 'react'
import Button from './Button'

type Props = {}

const Pricing = (props: Props) => {
    return (
        <section className='bg-[#212121] px-[72px] py-[60px] flex flex-col'>
            <div className=' sm:gap-x-[110px] md:gap-x-[170px] grid sm:grid-rows-2 lg:px-[122px] gap-y-14 sm:grid-cols-2'>
                {pricingItems.map(pricingItem => (
                    <div className=''>
                        <div className={`${abril.className} pb-2 items-center flex text-[24px] text-white`}>
                            <div>{pricingItem.title}</div>
                            <div className='bg-themeYellow mx-4 w-full h-[1px]'></div>
                            <div>${pricingItem.price}</div>
                        </div>
                        <div className={`${inter.className} text-[14px] text-white`}>{pricingItem.description}</div>
                    </div>
                ))}
            </div>
            <div className='flex flex-col md:flex-row mt-[100px] justify-center'>
                <div className='bg-themeYellow relative p-5 md:p-14 xl:p-28 md:w-[70%] xl:w-[55%] 
                h-[380px] md:h-[500px]'>
                    <div className={` w-full h-full`}>
                        <p className={`mb-4 font-black text-[14px] sm:text-[18px] xl:text-[20px] ${inter.className}`}>THIS WEEKS NEW PRODUCT</p>
                        <p className={`mb-3  text-[24px] sm:text-[35px] xl:text-[50px] font-black ${abril.className}`}>25% DISCOUNT</p>
                        <p className={`text-[13px] sm:text-[16px] ${inter.className}`}>This premium beard cream deeply nourishes and softens facial hair, leaving it manageable and smooth. Perfect for daily use, it enhances beard health and delivers a fresh, clean finish.</p>

                        <Button className='!w-[100px] sm:!w-[190px] mt-6 md:mt-10 !border-0 !bg-black !text-white'>BUY NOW</Button>
                    </div>

                </div>
                <div className='w-full md:w-[55%] xl:w-[45%] bg-green-400 relative h-[380px] 
                    md:h-[500px]
                ' >
                    <Image
                        fill
                        className='object-cover'
                        alt="product" src={product} />
                </div>
            </div>
        </section>
    )
}

export default Pricing