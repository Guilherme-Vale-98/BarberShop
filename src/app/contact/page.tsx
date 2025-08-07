import Brands from '@/components/Brands'
import ContactForm from '@/components/ContactForm'
import Header from '@/components/Header'
import Pricing from '@/components/Pricing'
import React from 'react'



const page = () => {
  return (
    <>
        <Header title='CONTACT US'/>
        <ContactForm/>
        <Pricing/>
        <Brands/>
    </>
  )
}

export default page