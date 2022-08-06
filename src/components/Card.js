// @flow
import * as React from 'react';
import CardFeature from "./Card/CardFeature";


export default function Card() {
    return (
        <div className="w-full bg-gray-100">
            <div className="container mx-auto py-16">
                <div className="flex space-x-4 justify-center items-center">
                    <CardFeature/>
                    <CardFeature/>
                    <CardFeature/>
                    <CardFeature/>
                    <CardFeature/>
                </div>
            </div>
        </div>
    );
};