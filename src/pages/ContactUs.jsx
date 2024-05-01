import Map from "../components/Map";


function ContactUs() {
    return (
        <><h2 className="text-center text-3xl text-[#70D2C0] my-10">Contact Us</h2><div className="grid grid-cols-1 md:grid-cols-5 p-10">
            <div className="col-span-3 h-96 overflow-hidden">
                <Map></Map>
            </div>
            <div className="col-span-2">
                <h2 className="text-3xl font-semibold my-4">Contact Us</h2>
                <p className="p-4">Thank you for visiting Art & Craft Store. If you have any questions or inquiries, please feel free to contact us using the information below:</p>
                <ul className="my-8">
                    <li className="my-2"><strong>Address:</strong> 123 Main Street, City, State, Zip Code</li>
                    <li className="my-2"><strong>Phone:</strong> (123) 456-7890</li>
                    <li className="my-2"><strong>Email:</strong> info@artandcraftstore.com</li>
                </ul>
            </div>
        </div></>
    );
}

export default ContactUs;
