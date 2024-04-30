import PropTypes from 'prop-types';

export default function Blog({ blog }) {
    const { title, image, description, date } = blog
    return (
        <div className="card w-full md:w-96 bg-base-100 shadow-xl mx-auto">

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box w-11/12 max-w-5xl flex">
                    <img className='w-1/2' src={image} alt="" />
                    <div className="w-1/2 p-8">
                        <p className='text-[#A8A8A8]'>Date: {date.slice(0, 17)}</p>
                        <h2 className="card-title my-3">{title}</h2>
                        <p className='p-5'>{description}</p>
                    </div>
                </div>
                <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
            </div>

            <figure className="px-10 pt-10">
                <img src={image} alt={title} className="rounded-xl w-full h-48" />
            </figure>
            <div className="card-body items-center text-center">
                <p className='text-[#A8A8A8]'>Date: {date.slice(0, 17)}</p>
                <h2 className="card-title ">{title}</h2>
                <p>{description.slice(0, 70)}</p>
                <div className="card-actions">
                    <label htmlFor="my_modal_7" className="btn btn-outline btn-sm">Details</label>
                </div>
            </div>
        </div>
    )
}
Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
