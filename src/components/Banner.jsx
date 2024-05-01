
export default function Banner() {
    return (
        <div className="hero min-h-96" style={{ backgroundImage: 'url(https://capricathemes.com/prestashop/PRS07/PRS070168/img/cms/cms-banner.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content  text-neutral-content ">
                <div className="max-w-md">
                    <h1 className="mb-3 text-5xl font-bold">30% Save</h1>
                    <h1 className="mb-5 text-5xl">Latest Ceramic Art</h1>
                    <p className="mb-5">There are many variations of passages of them.</p>
                    <button className="btn">Get Started</button>
                </div>
            </div>
        </div>
    )
}
