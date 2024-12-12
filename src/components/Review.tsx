import { abril, reviewItems } from '@/app/constants'
import Image from 'next/image'
import React from 'react'

type Props = {}

const Review = (props: Props) => {
   return (
       <section className='px-14 md:px-[72px] py-[60px]'>
           <div className='w-full'>
               <div className='text-center w-full mb-12'>
                   <p className={`${abril.className} text-[20px] text-themeYellow`}>WHAT PEOPLE SAY ABOUT US</p>
                   <p className={`${abril.className} text-[30px] md:text-[50px]`}>CLIENTS REVIEWS</p>
               </div>
               <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8'>
                   {reviewItems.map((item) => (
                       <div
                           key={item.id}
                           className='bg-gray-100 p-4 sm:p-5 md:p-6 rounded-lg shadow-md flex flex-col items-center text-center'
                       >
                           <div className="relative w-16 h-16 sm:w-20 sm:h-20 mb-4 rounded-full overflow-hidden">
                               <Image
                                   src={item.photo}
                                   alt={item.name}
                                   className="object-cover rounded-full"
                                   fill
                               />
                           </div>
                           <p className='text-base sm:text-lg text-themeYellow font-semibold mb-2'>{item.name}</p>
                           <p className='text-sm sm:text-base text-gray-600 italic'>"{item.review}"</p>
                       </div>
                   ))}
               </div>
           </div>
       </section>
   )
}

export default Review