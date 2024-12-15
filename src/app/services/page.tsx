import Header from '@/components/Header'
import Services from '@/components/Services'
import servicesBg from '../../../public/Services.png'
import React from 'react'
import Pricing from '@/components/Pricing'
import Review from '@/components/Review'
import ContactUs from '@/components/ContactUs'
import Blog from '@/components/Blog'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
        <Header title='SERVICES'/>
        <Services img={servicesBg} showTitle={false} />
        <Pricing/>
        <Review/>
        <Blog/>
        <ContactUs/>
    </div>
  )
}

export default page