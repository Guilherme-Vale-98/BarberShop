"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import Button from './Button'
import { usePathname } from 'next/navigation'
import { Scissors as ScissorsIcon, SquareMenu as SquareMenuIcon, SquareX as SquareXIcon} from 'lucide-react';
import { disablePageScroll, enablePageScroll } from '@fluejs/noscroll';
import { motion } from "motion/react"
type Props = {}

const Navbar = (props: Props) => {
  const pathname = usePathname();
  const [openNavigation, setOpenNavigation] = useState(false);
  const navItems = [
    { id: 1, title: "Home", url: "/" },
    { id: 2, title: "Services", url: "/services" },
    { id: 3, title: "Contact Us", url: "/contact" },
    { id: 4, title: "About Us", url: "/about" },
    { id: 5, title: "Blog", url: "/blog" }
  ]

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  return (
    <>
      <nav className='flex pb-[40px] px-[72px] pt-[40px] bg-black justify-between w-full'>
        <div>
          <ScissorsIcon size={48} color="#E9C664" strokeWidth={2.75} />
        </div>
        <div className='md:flex text-[18px] font-normal hidden md:w-[400px] lg:w-[33rem] justify-between items-center h-[50px]'>
          {navItems.map((navItem) => (
            <Link
              className={`hover:text-white ${pathname === navItem.url ? 'text-white' : 'text-[#979797]'}`}
              href={navItem?.url}
              key={navItem.id}
            >
              {navItem.title}
            </Link>
          ))}
        </div>

        <Button className="hidden md:inline w-[191px] md:w-[170px] text-[14px] text-white transition-all transform hover:bg-themeYellow hover:text-black ease-in-out duration-300 font-black h-[50px] border-2 border-themeYellow">
          Book Appointment
        </Button>
        <div className='text-white md:hidden'>
          {openNavigation? <SquareXIcon size={48} className='cursor-pointer' onClick={toggleNavigation} />: <SquareMenuIcon size={48} className='cursor-pointer' onClick={toggleNavigation} />}
        </div>
      </nav>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: openNavigation ? 360 : 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        className='w-full overflow-hidden bg-amber-500'>
          <div className='flex flex-col items-center space-y-6'>
            {navItems.map((navItem) => (
              <Link
                key={navItem.id}
                href={navItem.url}
                onClick={toggleNavigation}
                className={`
                  text-2xl font-bold 
                  ${pathname === navItem.url ? 'text-themeYellow' : 'text-white'}
                  hover:text-themeYellow 
                  transition-colors duration-300
                `}
              >
                {navItem.title}
              </Link>
            ))}

            <Button
              onClick={toggleNavigation}
              className="
                w-[250px] 
                text-[16px] 
                text-black 
                bg-themeYellow 
                hover:bg-white 
                transition-all 
                transform 
                ease-in-out 
                duration-300 
                font-black 
                h-[50px] 
                mt-6
              "
            >
              Book Appointment
            </Button>
          </div>
      </motion.div>
      
    </>
  )
}

export default Navbar