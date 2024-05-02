
import { Fade } from "react-awesome-reveal";
import { useLoaderData, useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";

export default function UpdateArtCraft() {
  const updateArtCraft = useLoaderData()
  const { name, image, email, item_name, subcategory_Name, processing_time, description, price, rating, _id } = updateArtCraft;
  const navigate = useNavigate()

  const handleUpdateArtCraft = (e) => {
    e.preventDefault()

    const form = new FormData(e.currentTarget)
    const name = form.get('name')
    const image = form.get('image')
    const email = form.get('email')
    const item_name = form.get('item_name')
    const subcategory_Name = form.get('subcategory_Name')
    const processing_time = form.get('processing_time')
    const description = form.get('description')
    const price = form.get('price')
    const rating = form.get('rating')
    const stock = form.get('stock')
    const customization = form.get('customization')
    const updateArtcraft = { name, image, email, item_name, subcategory_Name, processing_time, description, price, rating, stock, customization }

    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        fetch(`https://art-craft-store-server-three.vercel.app/updateartcraft/${_id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(updateArtcraft)
        })
          .then(res => res.json())
          .then(data => {
            data.acknowledged && Swal.fire("Saved!", "", "success"), navigate(`/myartcraft/${email}`)

          })
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });


  }



  return (
    <div className="min-h-svh flex items-center bg-base-200">

      <div className="card shrink-0 w-full max-w-4xl mx-auto shadow-2xl bg-base-100">
        <Fade delay={200} direction="down">
          <h2 className="text-center font-black text-4xl my-4">Update Art & Craft Item</h2>
        </Fade>
        <form className="card-body" onSubmit={handleUpdateArtCraft}>
          <div className="form-control">
            <Fade delay={200} direction="up">
              <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                <div className="w-full">
                  <label className="label">
                    <span className="label-text">Image URL</span>
                  </label>
                  <input name="image" defaultValue={image} type="text" placeholder="image URL" className="input input-bordered w-full" />
                </div>
                <div className="w-full">
                  <label className="label">
                    <span className="label-text">Item Name</span>
                  </label>
                  <input name="item_name" defaultValue={item_name} type="text" placeholder="Item Name" className="input input-bordered w-full" required />
                </div>
              </div>
            </Fade>
            <Fade delay={250} direction="up">
              <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                <div className="w-full">
                  <label className="label">
                    <span className="label-text">Subcategory Name</span>
                  </label>
                  <input name="subcategory_Name" defaultValue={subcategory_Name} type="text" placeholder="Subcategory Name" className="input w-full input-bordered" required />
                </div>
                <div className="w-full">
                  <label className="label">
                    <span className="label-text">Processing Time</span>
                  </label>
                  <input name="processing_time" defaultValue={processing_time} type="text" placeholder="Processing time" className="input w-full input-bordered" required />
                </div>
              </div>
            </Fade>
            <Fade delay={300} direction="up">
              <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                <div className="w-full">
                  <label className="label">
                    <span className="label-text">Short Description</span>
                  </label>
                  <textarea name="description" defaultValue={description} type="text" placeholder="Description" className="textarea input-bordered w-full" required />
                </div>
              </div>
            </Fade>
            <Fade delay={350} direction="up">
              <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                <div className="w-full">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input name="price" defaultValue={price} type="text" placeholder="price" className="input w-full input-bordered" required />
                </div>
                <div className="w-full">
                  <label className="label">
                    <span className="label-text">Rating</span>
                  </label>
                  <input name="rating" defaultValue={rating} type="text" placeholder="rating" className="input w-full input-bordered" required />
                </div>
              </div>
            </Fade>
            <Fade delay={400} direction="up">
              <div className="flex flex-col md:flex-row gap-4 md:gap-8 my-4">
                <div className="w-full">
                  <label className="label">
                    <span className="label-text">Customization</span>
                  </label>
                  <div className="input-bordered input items-center flex gap-1">
                    <input type="radio" name="customization" value={"Yes"} id="" /> Yes
                    <input type="radio" name="customization" value={"No"} id="" className="ml-14" /> No
                  </div>
                </div>
                <div className="w-full">
                  <label className="label">
                    <span className="label-text">Stock Status</span>
                  </label>
                  <div className="input-bordered input items-center flex gap-1">
                    <input type="radio" name="stock" id="" value={"In stock"} /> In stock
                    <input type="radio" name="stock" id="" value={"Made to Order"} className="ml-5 md:ml-14  " /> Made to Order
                  </div>
                </div>
              </div>
            </Fade>
            <Fade delay={450} direction="up">
              <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                <div className="w-full">
                  <label className="label">
                    <span className="label-text">User Name</span>
                  </label>
                  <input name="name" defaultValue={name} type="text" placeholder="Name" className="input w-full input-bordered" required />
                </div>
                <div className="w-full">
                  <label className="label">
                    <span className="label-text">User Email</span>
                  </label>
                  <input name="email" defaultValue={email} type="email" placeholder="Email" className="input w-full input-bordered" required />
                </div>
              </div>
            </Fade>
          </div>
          <Fade delay={550} direction="up">
            <div className="form-control mt-6">
              <button className="text-gray-900 bg-gradient-to-r from-teal-300 to-lime-500 hover:bg-gradient-to-l hover:from-teal-300 hover:to-lime-500 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Update</button>
            </div>
          </Fade>
        </form>
      </div>
    </div>
  )
}
