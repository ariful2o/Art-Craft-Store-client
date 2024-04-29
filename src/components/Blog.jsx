import PropTypes from 'prop-types';

export default function Blog({blog}) {
    const {title, image, description, date}=blog
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt={title} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title ">{title}</h2>
                <p>{description}</p>
                <div className="card-actions">
                    <button className="btn btn-outline btn-success btn-sm">Details</button>
                </div>
            </div>
        </div>
  )
}
Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
