import { AiOutlineMail } from "react-icons/ai";
import { BsFacebook, BsFillTelephoneFill, BsGoogle, BsLinkedin, BsTwitter } from "react-icons/bs";

export default function TopHeader() {
    return (
        <div className="bg-white text-gray-400">
            <div className="container mx-auto ">
                <div className="flex items-center">
                    <div className="flex-1 flex w-auto gap-x-2  h-8">
                        <a href="/" className="h-full flex text-sm items-center gap-x-2 px-2 border-r-2 border-gray-200">
                            <AiOutlineMail size={16} className="text-brand-color" />cakirerkazim42@gmail.com
                        </a>
                        <a href="/" className="h-full flex text-sm items-center gap-x-2 px-2">
                            <BsFillTelephoneFill size={14} className="text-brand-color" /> +90 (555) 444 3322
                        </a>
                    </div>
                    <nav className="flex items-center h-8">
                        <a href="/" className="h-full  flex justify-center items-center p-2 border-l-2 border-gray-200 "><BsFacebook size="14" className="text-gray-400" /></a>
                        <a href="/" className="h-full  flex justify-center items-center p-2 border-l-2 border-gray-200 "><BsTwitter size="14" className="text-gray-400" /></a>
                        <a href="/" className="h-full  flex justify-center items-center p-2 border-l-2 border-gray-200 "><BsLinkedin size="14" className="text-gray-400" /></a>
                        <a href="/" className="h-full  flex justify-center items-center p-2 border-l-2 border-r-2 border-gray-200 "><BsGoogle size="14" className="text-gray-400" /></a>
                    </nav>
                </div>
            </div>
        </div>
    )
}