import {RiFacebookFill, RiGoogleFill, RiLinkedinFill, RiShareForward2Line, RiTwitterFill} from "react-icons/ri";

export default function Share() {
    return (
        <div className="w-full flex gap-x-4 justify-center items-center gap-x-10">
            <div className="text-white flex gap-x-4">SHARE <RiShareForward2Line size={24}/></div>
            <div className="bg-gray-200 transform rotate-45 p-4"><RiFacebookFill  className="transform -rotate-45"/></div>
            <div className="bg-gray-200 transform rotate-45 p-4"><RiTwitterFill className="transform -rotate-45"/></div>
            <div className="bg-gray-200 transform rotate-45 p-4"><RiGoogleFill className="transform -rotate-45"/></div>
            <div className="bg-gray-200 transform rotate-45 p-4"><RiLinkedinFill className="transform -rotate-45" /></div>
        </div>
    );
};