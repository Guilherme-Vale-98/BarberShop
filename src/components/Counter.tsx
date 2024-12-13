"use client"
import { abril, counterItems } from '@/app/constants'
import { animate, motion, useInView, useMotionValue } from 'motion/react'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

function Counting({value}:{value: number}) {
    const count = useMotionValue(0)
    const [hasAnimated, setHasAnimated] = useState(false)

    useEffect(() => {
        if (!hasAnimated) {
            const controls = animate(count, value, {
                ease: "easeInOut", duration: 1.5, onUpdate: (latest) =>
                    count.set(Math.round(latest)), onComplete: () => setHasAnimated(true)
            })
            return () => controls.stop()
        }
    }, [value, hasAnimated])

    return <motion.div

    >{count}</motion.div>
}

const Counter = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
        <section ref={ref} className={`${abril.className} flex flex-col gap-7 sm:gap-0 sm:flex-row items-center  justify-between w-full bg-[#212121] py-[60px]  sm:px-[60px] md:px-[130px] text-white`}>
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
                        {isInView && <Counting value={counterItem.count}/>}
                    </div>
                    <div className='text-2xl text-center'>{counterItem.title}</div>
                </div>
            ))}
        </section>
    )
}

export default Counter