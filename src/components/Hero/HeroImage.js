export function HeroImage() {
    return (
        <div className="w-full  h-[160px] relative">
            <img alt="HeroMini" className="w-full object-cover h-[160px] content-center grayscale"
                 src="https://images.unsplash.com/photo-1636971828014-0f3493cba88a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"/>
            <div
                className="absolute  top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-white z-10 font-brand font-bold text-4xl">
                <span className="text-brand-color">WHERE ARE YOU</span> Hero Mini
            </div>
        </div>
    );
};