import Header from '@/components/Header'
import Services from '@/components/Services'
import servicesBg from '../../../public/Services.png'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
        <Header title='SERVICES'/>
        <Services img={servicesBg} showTitle={false} />
    </div>
  )
}

export default page