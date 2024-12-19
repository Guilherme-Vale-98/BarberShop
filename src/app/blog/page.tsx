import Blog from '@/components/Blog'
import ContactUs from '@/components/ContactUs'
import Header from '@/components/Header'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <>
        <Header title='BLOG' />
        <Blog></Blog>
        <ContactUs/>
    </>
  )
}

export default page