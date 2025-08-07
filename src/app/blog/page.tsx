import Blog from '@/components/Blog'
import ContactUs from '@/components/ContactUs'
import Header from '@/components/Header'



const page = () => {
  return (
    <>
        <Header title='BLOG' />
        <Blog></Blog>
        <ContactUs/>
    </>
  )
}

export default page