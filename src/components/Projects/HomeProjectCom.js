import Title from "../Title/Title";
import Projects from "./Projects";

export default function HomeProjectCom() {
    return (
        <div className="w-full bg-home-project">
            <div className="container mx-auto py-8">
                <div className="w-full flex justify-center py-4">
                    <Title title={"LASTEST PROJECT"} color={"brand-color"}
                           position={"justify-center"} />
                </div>
                <article className="container mx-auto">
                   <Projects />
                </article>
            </div>
        </div>
    );
};