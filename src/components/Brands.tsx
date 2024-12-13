import { abril, inter } from '@/app/constants'
import React from 'react'

type Props = {}

const Brands = (props: Props) => {
  return (
    <section className=' bg-black flex text-white py-[60px] px-[110px] h-[500px]'>
        <div className='border-r-2 border-r-themeYellow flex flex-col justify-center w-1/2'>
          <div className={`${abril.className}  text-[40px] `} >BRANDS WE CARRY</div>
          <div className={`${inter.className} w-1/2`} > Vestibulum commodo sapien non elit 
          porttitor, vitae volutpat nibh mollis. Nulla 
          porta risus id neque. </div>
        </div>
        <div className='grid border-l-2  items-center border-l-themeYellow w-[50%] grid-rows-2 gap-3 pl-14 grid-cols-3'>
              <div className='bg-green-400 w-32 h-32'></div>
              <div className='bg-green-400 w-32 h-32'></div>
              <div className='bg-green-400 w-32 h-32'></div>
              <div className='bg-green-400 w-32 h-32'></div>
              <div className='bg-green-400 w-32 h-32'></div>
              <div className='bg-green-400 w-32 h-32'></div>
        </div>
    </section>
  )
}

export default Brands