
import Link from 'next/link'
type Props = {}

const page = (props: Props) => {
  return (
      <div>

      <div className="m-8 font-sans  text-[10px] flex justify-center">
        <Link href={'/'} className="hover:underline">HOME</Link>&nbsp;/ CONTACT US
      </div>
      <div className="flex flex-col justify-between my-14 mx-auto h-[68vh] w-[48vw]">
        <h1 className={`text-6xl font-bold font-pinyon`}>Contact us</h1>
        <div className={`flex font-bold`}>Head Office Address</div>
        <div className={`flex`}>Shop No. 20 & 21, Gurudwara Tekri Sahib, Idgah Hills, Bhopal, M.P. 462001</div>
        <div className={`flex font-bold`}>Mobile No.</div>
        <div className={`flex`}>+91 9755331021</div>
        <div className={`flex font-bold`}>Email Address</div>
        <div className={`flex`}>support@klassy.in</div>
        <div className={`flex font-bold`}>Working Hours</div>
        <div className={`flex`}>Mon-Sat (11 am to 8 pm)</div>
      </div>

      </div>
  )
}


export default page