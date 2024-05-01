import { Fade } from "react-awesome-reveal";
import Map from "../components/Map";


function ContactUs() {
    return (
        <>
            <Fade delay={1000} direction="up">
                <h2 className="text-center text-3xl text-[#70D2C0] my-10">Contact Us</h2>
            </Fade>
            <div className="grid grid-cols-1 md:grid-cols-5 p-10">
            <Fade delay={300} direction="up"  className="col-span-3 h-96 overflow-hidden">
                <div>
                    <Map></Map>
                </div>
            </Fade>
                <div className="col-span-2">
                    <Fade delay={1200} direction="right">
                        <h2 className="text-3xl font-semibold my-4">Contact Us</h2>
                    </Fade>
                    <Fade delay={1300} direction="right">
                        <p className="p-4">Thank you for visiting Art & Craft Store. If you have any questions or inquiries, please feel free to contact us using the information below:</p>
                    </Fade>
                    <ul className="my-8">
                        <Fade delay={1400} direction="right">
                            <li className="my-2"><strong>Address:</strong> 123 Main Street, City, State, Zip Code</li>
                        </Fade>
                        <Fade delay={1450} direction="right">
                            <li className="my-2"><strong>Phone:</strong> (123) 456-7890</li>
                        </Fade>
                        <Fade delay={1500} direction="right">
                            <li className="my-2"><strong>Email:</strong> info@artandcraftstore.com</li>
                        </Fade>
                    </ul>
                </div>
            </div></>
    );
}

export default ContactUs;
