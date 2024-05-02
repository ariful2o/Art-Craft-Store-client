import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Blog from "../components/Blog";
import auth from "../firebase/firebase.init";
import { AuthContext } from "../provider/AuthProvider";
import { Fade } from "react-awesome-reveal";


export default function Blogs() {
    const blogs = useLoaderData()
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleBlogPost = (e) => {
        e.preventDefault()
        if (!user) {
            navigate('/login')
            return
        }
        const date = auth.currentUser?.metadata?.lastSignInTime
        const form = new FormData(e.currentTarget)
        const title = form.get('title')
        const image = form.get('image')
        const description = form.get('description')
        const blog = { title, image, description, date }

        fetch('https://art-craft-store-server-three.vercel.app/addblog', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(blog)
        })
            .then(res => res.json())
            .then(data => {
                data.acknowledged && toast.success('Blog Post Success')
            })
    }

    return (<>
        <Fade delay={200} direction="down">
            <h2 className="text-center text-3xl text-[#70D2C0] my-10">Latest News & Events</h2>
        </Fade>
        <ToastContainer />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-10">
            {
                !blogs ? <div className="justify-center flex my-20"><span className="loading loading-spinner loading-lg"></span></div> : blogs.map(blog => <Blog key={blog._id} blog={blog}></Blog>)
            }
        </div>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <dialog id="my_modal_2" className="modal">
            <div className="modal-box ">
                <h3 className="font-bold text-lg mb-5 text-center">New Blog</h3>
                <form onSubmit={handleBlogPost}>
                    <label className="input input-bordered flex items-center gap-2 my-8">
                        Title
                        <input name="title" type="text" className="grow" placeholder="title" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 my-8">
                        Image URL
                        <input name="image" type="text" className="grow" placeholder="http://blogImage.jpg" />
                    </label>
                    <label className=" flex items-center gap-2">
                        <textarea name="description" className="textarea textarea-primary w-full" placeholder="Description"></textarea>
                    </label>
                    <input className="btn btn-primary my-5 px-6" type="submit" value="Post" />
                </form>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
        <button onClick={() => document.getElementById('my_modal_2').showModal()} className="btn btn-outline btn-info block mx-auto my-4">Add New Blog</button>
    </>)
}
