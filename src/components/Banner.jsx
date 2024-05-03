import { Fade } from "react-awesome-reveal";
import { Typewriter } from "react-simple-typewriter";

export default function Banner() {
    return (
        <div className="hero min-h-96" style={{ backgroundImage: 'url(https://i.pinimg.com/736x/80/67/e3/8067e368b1124ad3ee5993dbce7c8180.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content ">
                <Fade delay={300} direction="right">

                    <div className="max-w-md">

                        <h1 className="mb-3 text-5xl font-bold">30% Save</h1>
                        <h1 className="mb-5 text-5xl block">Latest
                            <Typewriter
                                words={['  Landscape Painting', ' Portrait Drawing', ' Oil Painting',' Charcoal Sketching']}
                                loop={85}
                                cursor
                                cursorStyle='|'
                                typeSpeed={90}
                                deleteSpeed={50}
                                delaySpeed={1000}

                            />
                        </h1>
                        <Fade delay={400} direction="up">
                            <p className="mb-5">There are many variations of passages of them.</p>
                        </Fade>
                        <Fade delay={480} direction="up">
                            <button className="btn">Get Started</button>
                        </Fade>
                    </div>
                </Fade>
            </div>
        </div>
    )
}
