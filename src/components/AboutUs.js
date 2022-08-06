import Title from "./Title/Title";


export function AboutUs() {
    return (
        <div className="bg-about-us w-full">
            <div className="container mx-auto">
                <div className="flex ">
                    <div className="w-1/2">
                        <Title title="ABOUT US" color="gray-800" position="justify-start"/>
                        <div className="px-4">
                            <p className="font-brand font-semibold text-lg">Lorem ipsum dolor sit amet, consectetuer
                                adipiscing elit. Suspendisse et justo. Praesent
                                mattis.</p>
                            <p className="font-brand2 text-lg py-2">Lorem ipsum dolor sit amet, consectetuer adipiscing
                                elit. Suspendisse et justo. Praesent
                                mattis commodo augue. Aliquam ornare hendrerit augue. Cras tellus. In pulvinar lectus a
                                est.
                                Curabitur eget orci. Cras laoreet ligula. Etiam sit amet dolor.</p>
                            <p className="font-brand2 text-lg py-2">Lorem ipsum dolor sit amet, consectetuer adipiscing
                                elit. Suspendisse et justo. Praesent
                                mattis commodo augue. Aliquam ornare hendrerit augue. </p>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <img alt="About Us"
                             className="w-[560px] h-[400px] object-cover"
                             src="https://images.unsplash.com/photo-1633113214698-485cdb2f56fd?ixid=MnwxMjA3fDF8MHxwaG90
                             by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"/>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
};