import {Header, TopHeader} from "../components/Header";
import {Hero} from "../components/Hero";
import Card from "../components/Card";
import {AboutUs} from "../components/AboutUs";
import HomeProjectCom from "../components/Projects/HomeProjectCom";

export function Home() {
    return (
        <>
            <TopHeader/>
            <Header/>
            <Hero/>
            <Card />
            <AboutUs/>
            <HomeProjectCom />
        </>
    );
};