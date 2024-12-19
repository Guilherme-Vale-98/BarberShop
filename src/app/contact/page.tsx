import Brands from '@/components/Brands'
import ContactForm from '@/components/ContactForm'
import Header from '@/components/Header'
import Pricing from '@/components/Pricing'
import React from 'react'

type Props = {}

const page = (props: Props) => {
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