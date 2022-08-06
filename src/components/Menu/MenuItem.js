//import "./index.css";

export default function Header({title}) {
    return (
        <a href="/"
           className="h-[90px] flex items-center px-4 transition-colors  hover:border-t-2 hover:border-brand-color hover:text-brand-color">{title}</a>
    );
}