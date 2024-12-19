import { abril } from '@/app/constants'
import Image from 'next/image'
import React from 'react'
import servicesHeader from '../../public/services bg.png'
type Props = {
    title: string
}

const Header = ({title}: Props) => {
  return (
    <header className={`${abril.className} relative flex items-center justify-center 
    text-[60px] text-white
     h-[250px]`}>
        <Image fill className='object-cover absolute inset-0 -z-10' src={servicesHeader} alt='Barber shop chair' />
        {title}
    </header>
  )
}

export default Header