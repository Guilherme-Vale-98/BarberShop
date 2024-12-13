import { ContactInfo } from '@/app/constants'
import { abril, inter } from '@/app/constants'
import Image from 'next/image'

type Props = {
    contactInfo: ContactInfo
}

const ContactItem = ({ contactInfo }: Props) => {
    return (
        <address key={contactInfo.id} className=' not-italic w-[250px] text-center'>
            <div className=" flex items-center flex-col overflow-hidden mb-6">
                <Image
                    alt={contactInfo.alt}
                    src={contactInfo.icon}
                    className="object-contain max-h-[80px]"
                />
            </div>
            <div className={`${abril.className} text-center text-[16px] sm:text-[20px] mx-auto`}>{contactInfo.title.toLocaleUpperCase()}</div>
            {
                Array.isArray(contactInfo.value) ? (
                            <>
                                <div className={`${inter.className} text-[14px] sm:text-[17px]`}>{contactInfo.value[0]}</div>
                                <div className={`${inter.className} text-[14px] sm:text-[17px]`}>{contactInfo.value[1]}</div>
                            </>
                ):  <div className={`${inter.className} text-[14px] sm:text-[17px]`}>{contactInfo.value}</div>
                    }
           


        </address>
    )
}

export default ContactItem