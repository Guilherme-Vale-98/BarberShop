import { abril, inter } from '@/app/constants'
import logo1 from '../../public/logo1.png';
import logo2 from '../../public/logo2.png';
import logo3 from '../../public/logo3.png';
import logo4 from '../../public/logo4.png';
import logo5 from '../../public/logo5.png';
import logo6 from '../../public/logo6.png';

import React from 'react'
import Image from 'next/image'

type Props = {}

const Brands = (props: Props) => {
  return (
    <section className=' bg-white flex items-center justify-center gap-6 md:gap-0 flex-wrap md:flex-nowrap text-black py-[60px] xl:px-[110px]'>
      <div className=' flex items-center flex-col justify-center w-full text-center lg:w-1/2'>
        <div className={`${abril.className}  text-[40px] `} >BRANDS WE CARRY</div>
        <div className={`${inter.className} w-1/2`} > Vestibulum commodo sapien non elit
          porttitor, vitae volutpat nibh mollis. Nulla
          porta risus id neque. </div>
      </div>
      <div className="grid py-4 items-center border-t-2 border-t-themeYellow md:border-t-0 md:border-l-2 md:border-l-themeYellow w-full mx-10 md:w-full grid-cols-1  md:grid-cols-2  lg:grid-cols-3 gap-6 pl-6 md:pl-14">
        <div className="flex justify-center items-center w-32 h-32 mx-auto">
          <Image src={logo1} alt="Brand 1 Logo" layout="intrinsic" width={128} height={128} />
        </div>
        <div className="flex justify-center items-center  w-32 h-32 mx-auto">
          <Image src={logo2} alt="Brand 2 Logo" layout="intrinsic" width={128} height={128} />
        </div>
        <div className="flex justify-center items-center  w-32 h-32 mx-auto">
          <Image src={logo3} alt="Brand 3 Logo" layout="intrinsic" width={128} height={128} />
        </div>
        <div className="flex justify-center items-center  w-32 h-32 mx-auto">
          <Image src={logo4} alt="Brand 4 Logo" layout="intrinsic" width={128} height={128} />
        </div>
        <div className="flex justify-center items-center  w-32 h-32 mx-auto">
          <Image src={logo5} alt="Brand 5 Logo" layout="intrinsic" width={128} height={128} />
        </div>
        <div className="flex justify-center items-center  w-32 h-32 mx-auto">
          <Image src={logo6} alt="Brand 6 Logo" layout="intrinsic" width={128} height={128} />
        </div>
      </div>
    </section>
  )
}

export default Brands