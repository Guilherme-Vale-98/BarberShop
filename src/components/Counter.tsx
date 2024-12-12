"use client"
import { abril, counterItems } from '@/app/constants'
import { animate, motion, useMotionValue } from 'motion/react'
import Image from 'next/image'
import React, { useEffect } from 'react'

function counting(value: number) {
    const count = useMotionValue(0)

    useEffect(() => {
        const controls = animate(count, value, { ease: "easeInOut",duration: 2, onUpdate: (latest) =>
         count.set(Math.round(latest)) 
        })
        return () => controls.stop()
    }, [value])

    return <motion.div>{count}</motion.div>
}

const Counter = () => {
    return (
        <section className={`${abril.className} flex flex-col gap-7 sm:gap-0 sm:flex-row items-center  justify-between w-full bg-[#212121] py-[60px]  sm:px-[60px] md:px-[130px] text-white`}>
            {counterItems.map((counterItem, index) => (
                <div key={index} className=' flex w-40 flex-col justify-center items-center'>
                    <div className='relative  w-[40px] h-[80px]'>
                        <Image
                            src={counterItem.logo}
                            alt={counterItem.title}
                            fill
                            style={{
                                objectFit: 'contain',
                                objectPosition: 'center'
                            }}
                        />
                    </div>

                    <div className='text-6xl my-[30px] text-themeYellow'>
                        {counting(counterItem.count)}
                    </div>
                    <div className='text-xl text-center'>{counterItem.title}</div>
                </div>
            ))}
        </section>
    )
}

export default Counter