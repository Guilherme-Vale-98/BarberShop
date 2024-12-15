import Barbers from '@/components/Barbers'
import Brands from '@/components/Brands'
import ContactUs from '@/components/ContactUs'
import Counter from '@/components/Counter'
import Header from '@/components/Header'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <Header title='ABOUT US' />
      <Barbers />
      <Counter/>
      <Brands/>
      <ContactUs/>
    </div>
  )
}

export default page