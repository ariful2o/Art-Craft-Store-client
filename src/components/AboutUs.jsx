import { Fade } from "react-awesome-reveal";


export default function AboutUs() {
    return (<>
        <Fade delay={500} direction="down">
            <h2 className=" text-3xl text-center my-20 text-[#70D2C0]">About Us</h2>
        </Fade>

        <div className="flex flex-col md:flex-row">
            <Fade delay={400} className="w-full md:w-1/2 animate__animated animate__bounce animate__fadeIn">
                <img className="w-full h-full p-2" src={`https://bw-craftxtore.bzotech.com/demo5/wp-content/uploads/2023/11/banner2-home5.webp`} alt="" />
            </Fade>
            <div className="p-8">
                <Fade delay={500} direction="right">
                    <h2 className=" text-3xl text-[#70D2C0] my-8">Everyone&apos;s dream gadget</h2>
                </Fade>
                <Fade delay={600} direction="right">
                    <p>We are passionate about doing our part to make life better. We offer high quality merchandise, great value and exceptional customer service. We connect people to products and services in new and unexpected ways. We contribute to creating dream products for everyone.
                    </p>
                </Fade>
                <div className="grid grid-cols-2 mt-8">
                    <Fade delay={700} direction="right">
                        <div className="flex items-center">
                            <img src={`https://bw-craftxtore.bzotech.com/demo5/wp-content/uploads/2023/11/Icon-service-home5-1.png`} alt="" />
                            <p>Fast & Free Shipping</p>
                        </div>
                    </Fade>
                    <Fade delay={780} direction="right">
                        <div className="flex items-center">
                            <img src={`https://bw-craftxtore.bzotech.com/demo5/wp-content/uploads/2023/11/Icon-service-home5-4.png`} alt="" />
                            <p>Money Back Guarante</p>
                        </div>
                    </Fade>
                    <Fade delay={840} direction="right">
                        <div className="flex items-center">
                            <img src={`https://bw-craftxtore.bzotech.com/demo5/wp-content/uploads/2023/11/Icon-service-home5-2.png`} alt="" />
                            <p>24/7 Support</p>
                        </div>
                    </Fade>
                    <Fade delay={890} direction="right">
                        <div className="flex items-center">
                            <img src={`https://bw-craftxtore.bzotech.com/demo5/wp-content/uploads/2023/11/Icon-service-home5-3.png`} alt="" />
                            <p>High Quality</p>
                        </div>
                    </Fade>
                </div>

            </div>
        </div>

    </>)
}
