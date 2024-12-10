"use client"
import React from 'react'


import { motion } from "motion/react"
import { abril } from '@/app/constants'

type Props = {}



const Hero = (props: Props) => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 70 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };
    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5, ease: "easeInOut", delay: 0.6 } },
    };
    const backgroundStyle = {
        backgroundImage: "url('/hero.png')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }

    return (
        <section
            className='w-full overflow-hidden flex items-center justify-center h-[600px]'
            style={backgroundStyle}
        >
            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className='relative logo-container w-[700px] flex items-center h-[350px]  md:h-[500px]'>
                <img
                    className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-full max-h-full'
                    src='/logo.png'
                    alt='logo'
                />
                <motion.h1
                    variants={fadeIn}
                    className={`${abril.className} text-center absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-full max-h-full text-[50px] sm:text-[80px] md:text-[105px] w-full text-white h-[140px`}>
                    BARBERSHOP
                </motion.h1>
                <motion.h3
                    variants={fadeIn}
                    className={`${abril.className} absolute top-[95%] md:top-[90%] left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-full max-h-full text-[28px] md:text-[36px] w-full text-white h-[140px] text-center`}>
                    Shaves & trims
                </motion.h3>
                <div className='absolute justify-between flex w-[257px]  md:w-[367px] px-4 left-1/2 -translate-x-1/2 top-[90%]'>
                    <span className={`${abril.className} text-[20px] md:text-[25px] text-themeYellow  text-center`}> EST.</span>

                    <span className={`${abril.className} text-[20px] md:text-[25px] text-themeYellow  text-center`}> 2024</span>
                </div>
            </motion.div>


        </section>
    )
}

export default Hero
