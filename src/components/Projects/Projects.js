import Slider from 'react-slick'
import Share from "../Share/Share";

export default function Projects() {
    const settings = {
        infinite: true,
        speed: 500,
        autoplay:true,
        autoplaySpeed: 3500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings} className="container mx-auto">
            <div className="w-full !flex gap-x-10">
                <div className="w-1/2 flex flex-col items-center gap-y-8">
                    <h4 className="text-white font-semibold font-brand text-2xl py-6">Project Heading</h4>
                    <p className="text-white font-brand2 text-lg">  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus at
                        corporis cum cupiditate
                        doloremque facere, inventore labore minus odio officiis quae quas quia quis quod repudiandae
                        sequi, tenetur ut voluptatibus?</p>
                    <hr className="w-96 py-6"/>
                    <Share/>
                </div>
                <div className="w-1/2">
                    <img alt="test"
                         className="w-full object-cover"
                         src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=MnwxMjA3fDB8MHxwaG90by1w
                         YWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"/>
                </div>
            </div>
            <div className="w-full !flex gap-x-10">
                <div className="w-1/2 flex flex-col items-center gap-y-8">
                    <h4 className="text-white font-semibold font-brand text-2xl py-6">Project Heading</h4>
                    <p className="text-white font-brand2 text-lg">  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus at
                        corporis cum cupiditate
                        doloremque facere, inventore labore minus odio officiis quae quas quia quis quod repudiandae
                        sequi, tenetur ut voluptatibus?</p>
                    <hr className="w-96 py-6"/>
                    <Share/>
                </div>
                <div className="w-1/2">
                    <img alt="test"
                         className="w-full object-cover"
                         src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=MnwxMjA3fDB8MHxwaG90by1w
                         YWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"/>
                </div>
            </div>
            <div className="w-full !flex gap-x-10">
                <div className="w-1/2 flex flex-col items-center gap-y-8">
                    <h4 className="text-white font-semibold font-brand text-2xl py-6">Project Heading</h4>
                    <p className="text-white font-brand2 text-lg">  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus at
                        corporis cum cupiditate
                        doloremque facere, inventore labore minus odio officiis quae quas quia quis quod repudiandae
                        sequi, tenetur ut voluptatibus?</p>
                    <hr className="w-96 py-6"/>
                    <Share/>
                </div>
                <div className="w-1/2">
                    <img alt="test"
                         className="w-full object-cover"
                         src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=MnwxMjA3fDB8MHxwaG90by1w
                         YWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"/>
                </div>
            </div>
            <div className="w-full !flex gap-x-10">
                <div className="w-1/2 flex flex-col items-center gap-y-8">
                    <h4 className="text-white font-semibold font-brand text-2xl py-6">Project Heading</h4>
                    <p className="text-white font-brand2 text-lg">  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus at
                        corporis cum cupiditate
                        doloremque facere, inventore labore minus odio officiis quae quas quia quis quod repudiandae
                        sequi, tenetur ut voluptatibus?</p>
                    <hr className="w-96 py-6"/>
                    <Share/>
                </div>
                <div className="w-1/2">
                    <img alt="test"
                         className="w-full object-cover"
                         src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=MnwxMjA3fDB8MHxwaG90by1w
                         YWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"/>
                </div>
            </div>
        </Slider>
    );
};