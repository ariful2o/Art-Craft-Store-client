import PropTypes from 'prop-types';
import { useState } from 'react';

export default function Blog({ blog }) {
    const { title, image, description, date } = blog

    const [showFullDescription, setShowFullDescription] = useState(false);

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };
    return (
        <div className="card w-full md:w-96 bg-base-100 shadow-xl mx-auto">
            <figure className="px-10 pt-10">
                <img src={image} alt={title} className="rounded-xl w-full h-48" />
            </figure>
            <div className="card-body items-center text-center">
                <p className='text-[#A8A8A8]'>Date: {date.slice(0, 17)}</p>
                <h2 className="card-title ">{title}</h2>
                <p>{showFullDescription ? description : description.slice(0, 70)}</p>
                <div className="card-actions">
                    <button className='btn btn-outline btn-sm mt-3' onClick={toggleDescription}>{!showFullDescription?"Show More":"Show Less"}</button>
                </div>
            </div>
        </div>
    )
}
Blog.propTypes = {
    blog: PropTypes.object.isRequired
}