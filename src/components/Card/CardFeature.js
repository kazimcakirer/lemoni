// @flow
import * as React from 'react';
import {BiBulb} from "react-icons/all";

export default function CardFeature() {
    return (
        <div>
            <div className="relative border border-gray-400 w-[270px] group transition ">
                <div className="bg-white group-hover:bg-brand-color group-hover:border-brand-color transition
                        border-2 border-gray-400 p-4 absolute transform rotate-45 left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 rounded">
                    <BiBulb size={32}
                            className="text-black transform -rotate-45  "/>
                </div>
                <h3 className="w-full text-center mt-10 font-semibold text-lg pb-2 pt-6">3D Design</h3>
                <div className="w-full flex flex-col items-center gap-y-0.5 pb-6">
                    <hr className="border-t-2 border-gray-400 w-12 "/>
                    <hr className="border-t-2 border-gray-400 w-12 "/>
                </div>

                <p className="w-full text-center px-2 pb-6">.Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit </p>
                <button className="w-full text-center pb-6 group-hover:text-brand-color transition">Read more..</button>
            </div>
        </div>
    );
};