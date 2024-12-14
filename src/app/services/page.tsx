import Header from '@/components/Header'
import Services from '@/components/Services'
import servicesBg from '../../../public/Services.png'
import React from 'react'
import Pricing from '@/components/Pricing'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
        <Header title='SERVICES'/>
        <Services img={servicesBg} showTitle={false} />
        <Pricing/>
    </div>
  )
}

export default page