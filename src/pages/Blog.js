import {Header, TopHeader} from "../components/Header";
import {HeroImage} from "../components/Hero/HeroImage";

export function Blog() {
    return (
        <div>
            <TopHeader/>
            <Header/>
            <HeroImage/>
            <div className="w-full border-b-2">
                <div className="container mx-auto">
                    <div className="w-full flex justify-between py-6 items-center">
                        <h2 className="font-brand text-3xl ">Blog</h2>
                        <div className="">
                            <button className="font-semibold text-lg">Home</button>
                            /
                            <button className="text-lg">Blog</button>/
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <div className="container mx-auto flex">
                    <div className="w-3/5 bg-gray-700">

                        <div className="w-full">
                            <div className="w-full">
                                test
                            </div>
                            <div className="flex flex-col">
                                <h4>Nullam turpis Cras dapibus </h4>
                                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque blanditiis deserunt distinctio fugiat laboriosam nobis reprehenderit. Ab consectetur cupiditate enim eos expedita fugiat itaque laborum molestias perferendis, quod repudiandae sunt.</p>
                                <button>Read me</button>
                            </div>
                        </div>

                    </div>
                    <div className="w-2/5 bg-gray-200">test</div>
                </div>


            </div>
        </div>
    );
};