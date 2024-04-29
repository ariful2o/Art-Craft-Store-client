import { Link } from "react-router-dom"
import { PropTypes } from "prop-types";


export default function ArtCraftCard({ artCraft }) {
    const { item_name, image, price, rating, _id, stock } = artCraft
    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto">
            <figure><img className="w-full h-56 p-2" src={image} alt={item_name} /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {item_name}
                    <div className="badge badge-secondary badge-outline">{stock}</div>
                </h2>
                <div className="flex">
                    <p>Price : {price}</p>
                    <p>Rating : {rating}</p>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/allartcraft/${_id}`}>
                        <div className="badge badge-outline">Details</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
ArtCraftCard.propTypes = {
    artCraft: PropTypes.object.isRequired,
};