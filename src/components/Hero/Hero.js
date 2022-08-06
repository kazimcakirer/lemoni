// @flow


export function Hero() {
    return (
        <div className="w-full h-[600px] relative">
            <img alt="hero"
                 className="w-full object-cover h-[600px] relative "
                 src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"/>
            <div
                className="absolute inset-0 w-full h-full flex items-center justify-center  bg-gray-700 bg-opacity-50 z-10">
                <div className="w-[740px] mx-auto">
                    <div
                        className="text-brand-color text-[120px] font-brand font-bold leading-[120px] uppercase">Modern
                    </div>
                    <div
                        className="text-white  text-6xl font-brand font-bold text-center leading-[10px] uppercase">And
                    </div>
                    <div
                        className="text-white text-[120px] font-brand font-bold text-right leading-[120px] uppercase">Unique
                    </div>
                    <div className="flex">
                        <div className="border-t-2 border-white px-8"></div>
                        <div className="px-4 text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at ipsa ipsum nam officia
                            unde voluptatem.
                        </div>
                        <div className="flex gap-x-2">
                            <button
                                className="w-[140px] h-[50px] border-2 border-white px-6 px-2 rounded text-white bg-transparent whitespace-nowrap uppercase">Get
                                Started
                            </button>
                            <button
                                className="w-[140px] h-[50px] border-2 border-brand-color px-6 px-2 rounded text-black bg-brand-color whitespace-nowrap uppercase">Buy
                                Now!
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};