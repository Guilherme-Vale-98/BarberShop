"use client"
import { abril, inter } from '@/app/constants';
import logo1 from '../../public/logo1.png';
import logo2 from '../../public/logo2.png';
import logo3 from '../../public/logo3.png';
import logo4 from '../../public/logo4.png';
import logo5 from '../../public/logo5.png';
import logo6 from '../../public/logo6.png';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

type Props = {};

const Brands = (props: Props) => {
  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (index: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: index * 0.2, 
        duration: 0.5,
      },
    }),
  };

  const logos = [logo1, logo2, logo3, logo4, logo5, logo6]

  return (
    <motion.section
      className="bg-white flex items-center justify-center gap-6 md:gap-0 flex-wrap md:flex-nowrap text-black py-[60px] xl:px-[110px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.9 }} 
    >
      <div className="flex items-center flex-col justify-center w-full text-center">
        <div className={`${abril.className} text-[40px]`}>BRANDS WE CARRY</div>
        <div className={`${inter.className} w-1/2`}>
          Vestibulum commodo sapien non elit porttitor, vitae volutpat nibh mollis. Nulla porta
          risus id neque.
        </div>
      </div>

      <div className="grid py-4 items-center border-t-2 border-t-themeYellow md:border-t-0 md:border-l-2 md:border-l-themeYellow w-full mx-10 md:w-full grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 sm:pl-6 md:pl-14">
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            className="flex justify-center items-center sm:w-32 sm:h-32 mx-auto"
            variants={logoVariants}
            custom={index}
          >
            <Image src={logo} alt={`Brand ${index + 1} Logo`} layout="intrinsic" width={128} height={128} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Brands;
