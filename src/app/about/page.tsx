import Barbers from '@/components/Barbers'
import Brands from '@/components/Brands'
import ContactUs from '@/components/ContactUs'
import Counter from '@/components/Counter'
import Header from '@/components/Header'

const page = () => {
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