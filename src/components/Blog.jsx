import PropTypes from 'prop-types';
import { useState } from 'react';
import { Fade } from 'react-awesome-reveal';

export default function Blog({ blog }) {
    const { title, image, description, date } = blog

    const [showFullDescription, setShowFullDescription] = useState(false);

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };
    return (
        <div className="card w-full md:w-96 bg-base-100 shadow-xl mx-auto">
            <Fade delay={200} direction='left'>
                <figure className="px-10 pt-10">
                    <img src={image} alt={title} className="rounded-xl w-full h-48" />
                </figure>
            </Fade>
            <div className="card-body items-center text-center">
                <Fade delay={200} direction='right'>
                    <p className='text-[#A8A8A8]'>Date: {date.slice(0, 17)}</p>
                </Fade>
                <Fade delay={250} direction='right'>
                    <h2 className="card-title ">{title}</h2>
                </Fade>
                <Fade delay={300} direction='right'>
                    <p>{showFullDescription ? description : description.slice(0, 70)}</p>
                </Fade>
                <div className="card-actions">
                    <Fade delay={400} direction='up'>
                        <button className='btn btn-outline btn-sm mt-3' onClick={toggleDescription}>{!showFullDescription ? "Show More" : "Show Less"}</button>
                    </Fade>
                </div>
            </div>
        </div>
    )
}
Blog.propTypes = {
    blog: PropTypes.object.isRequired
}