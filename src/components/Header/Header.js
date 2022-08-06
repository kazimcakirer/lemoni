import logo from "../../assets/img/i.png"
import MainMenu from "../Menu/MainMenu";

export default function Header() {
    return (
        <div className="bg-white border-t-2 border-gray-200">
            <div className="container mx-auto flex justify-between items-center h-[90px]">
                <div className="logo flex items-center space-x-1">
                    <img alt="lemoni" src={logo}/> <span className="text-4xl font-brand">limon</span>
                </div>
                <MainMenu/>
            </div>
        </div>
    );
}