export default function Title({title, color, position}) {

    return (
        <div className="w-full py-6 container mx-auto">
            <h3 className={`text-center font-brand  font-bold text-5xl py-2 text-${color}`}>{title}</h3>
            <div
                className={`relative flex  left-1/2 transform -translate-x-1/2  space-x-4 w-20 border-b  w-56 border-${color} ${position}`}>
                <div className={`absolute w-6 border-b-4  bottom-0 transform translate-y-1/2 border-${color}`}></div>
                <div className="absolute w-4 border-b-4 border-white bottom-0 transform translate-y-1/2"></div>
            </div>
        </div>
    );
};