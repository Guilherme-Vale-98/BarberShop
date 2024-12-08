import React from 'react'
import {Abril_Fatface} from 'next/font/google'
import {Bebas_Neue} from 'next/font/google'
type Props = {}
const abril = Abril_Fatface({subsets: ['latin'], weight:'400'})
const bebas = Bebas_Neue({subsets: ['latin'], weight:'400'})
const Hero = (props: Props) => {
    
    const backgroundStyle = {
        backgroundImage: "url('/hero.png')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }

    return (
        <section
            className='w-full flex items-center justify-center h-[600px]'
            style={backgroundStyle}
        >
            <div className='relative logo-container w-[700px] flex items-center h-[500px]'>
                <img
                    className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-full max-h-full'
                    src='/logo.png'
                    alt='logo'
                />
                <h1 className={`${abril.className} absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-full max-h-full text-[105px] w-full text-white h-[140px]`}>BARBERSHOP</h1>
                <h3 className={`${abril.className} absolute top-[90%] left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-full max-h-full text-[36px] w-full text-white h-[140px] text-center`}> Shaves & trims</h3>
                <span className={`${abril.className} absolute top-[105%] left-[30%] -translate-x-1/2 -translate-y-1/2 max-w-full max-h-full text-[25px] w-full text-themeYellow h-[140px] text-center`}> EST.</span>
                <span className={`${abril.className} absolute top-[105%] left-[70%] -translate-x-1/2 -translate-y-1/2 max-w-full max-h-full text-[25px] w-full text-themeYellow h-[140px] text-center`}> 2024</span>
            </div>


        </section>
    )
}

export default Hero
