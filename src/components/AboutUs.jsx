

export default function AboutUs() {
    return (<>
        <h2 className=" text-3xl text-center my-10 text-[#70D2C0]">About Us</h2>
        <div className="flex flex-col md:flex-row">
            <img className="w-full md:w-1/2" src={`https://bw-craftxtore.bzotech.com/demo5/wp-content/uploads/2023/11/banner2-home5.webp`} alt="" />
            <div className="p-8">
                <h2 className=" text-3xl text-[#70D2C0] my-8">Everyone&apos;s dream gadget</h2>
                <p>We are passionate about doing our part to make life better. We offer high quality merchandise, great value and exceptional customer service. We connect people to products and services in new and unexpected ways. We contribute to creating dream products for everyone.
                </p>
                <div className="grid grid-cols-2 mt-8">
                    <div className="flex items-center">
                        <img src={`https://bw-craftxtore.bzotech.com/demo5/wp-content/uploads/2023/11/Icon-service-home5-1.png`} alt="" />
                        <p>Fast & Free Shipping</p>
                    </div>
                    <div className="flex items-center">
                        <img src={`https://bw-craftxtore.bzotech.com/demo5/wp-content/uploads/2023/11/Icon-service-home5-4.png`} alt="" />
                        <p>Money Back Guarante</p>
                    </div>
                    <div className="flex items-center">
                        <img src={`https://bw-craftxtore.bzotech.com/demo5/wp-content/uploads/2023/11/Icon-service-home5-2.png`} alt="" />
                        <p>24/7 Support</p>
                    </div>
                    <div className="flex items-center">
                        <img src={`https://bw-craftxtore.bzotech.com/demo5/wp-content/uploads/2023/11/Icon-service-home5-3.png`} alt="" />
                        <p>High Quality</p>
                    </div>
                </div>

            </div>
        </div>

    </>)
}
