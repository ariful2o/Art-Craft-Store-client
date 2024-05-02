import { Link } from "react-router-dom"
import { PropTypes } from "prop-types";
import { Fade } from "react-awesome-reveal";


export default function ArtCraftCard({ artCraft }) {
    const { item_name, image, price, rating, _id, stock } = artCraft
    return (
        <div className="card w-full md:w-96 bg-base-100 shadow-xl mx-auto ">
            <Fade delay={200} direction="down">
                <figure><img className="w-full h-56 p-2" src={image} alt={item_name} /></figure>
            </Fade>
            <div className="card-body">
                <Fade delay={180} direction="right" >
                    <h2 className="card-title">
                        {item_name}
                        <div className="badge badge-secondary badge-outline">{stock}</div>
                    </h2>
                </Fade>
                <div className="flex">
                    <Fade delay={220} direction="right" >
                        <p>Price : {price}</p>
                    </Fade>
                    <Fade delay={280} direction="right" >
                        <p>Rating : {rating}</p>
                    </Fade>
                </div>
                <div className="card-actions justify-end">
                    <Fade delay={320} direction="right" >
                        <Link to={`/allartcraft/${_id}`}>
                            <div className="badge badge-outline">Details</div>
                        </Link>
                    </Fade>
                </div>
            </div>
        </div>
    )
}
ArtCraftCard.propTypes = {
    artCraft: PropTypes.object.isRequired,
};