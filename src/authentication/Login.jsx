import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../authProvider/AuthProvider";


export default function Login() {
  const { loginUser, loginWithGoogle, loginWithgithub } = useContext(AuthContext)
  const [showPassword, setShowPassword] = useState(true)
  const navigate = useNavigate()
  const location = useLocation()

  const handleShowPassWord = () => {
    setShowPassword(!showPassword)
  }

  const handleLogIn = (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const email = form.get('email')
    const password = form.get('password')

    loginUser(email, password)
      .then(() => {
        // const usr = result.user
        e.target.reset()
        navigate(location?.state ? location.state : '/')
      })
      .catch((err) => toast.error(err.message))
  }
  //forgat password

  // const handleForgetPassword = (e) => {
  //     const email = e.target.forgetmail.value
  //     forgetPassword(email)
  //     .then(()=>{
  //         toast('Password reset email sent!')
  //         e.target.reset()

  //     })
  //     .catch(err=>toast.error(err))
  // }

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then(() => toast('Log in successfull'))
      .catch(err => toast.error(err))
  }
  const handleGithubLogin = () => {
    loginWithgithub()
      .then(() => toast('Log in successfull'))
      .catch(err => toast.error(err))
  }


  return (
    <>
      <Helmet>
        <title>House Rent| Login</title>
      </Helmet>
      <ToastContainer />
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog" >
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            <h3 className="font-bold text-lg my-3">Hello!</h3>
            <label className="input input-bordered flex items-center gap-2">
              <input name="forgetmail" type="text" className="grow" placeholder="Enter your Email" />
              <button className="badge badge-info py-4 px-4">Send</button>
            </label>
          </form>

        </div>
      </dialog>
      <div className="max-h-svh  relative">
        <div className="card shrink-0 w-full max-w-2xl shadow-2xl bg-base-100   top-32 left-1/4 py-10">
          <h1 className="text-center text-5xl font-bold font-sotify">Login your account</h1>
          <form className="card-body" onSubmit={handleLogIn}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input name="email" type="email" placeholder="Enter your email address" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input name="password" type={!showPassword ? "text" : "password"} placeholder="Enter your password" className="input input-bordered" required />
              <div className="absolute right-10 bottom-1/2">
                {showPassword ? <span onClick={handleShowPassWord}><FaRegEye /></span> : <span onClick={handleShowPassWord}><FaRegEyeSlash /></span>
                }
              </div>
              <label className="label">
                <a onClick={handleGoogleLogin} href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-4 opacity-60">
              <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login</button>
            </div>
            <p className="text-center pt-4">Dont’t Have An Account ?<Link to="/register" className="text-[#F75B5F] font-bold"> Register</Link></p>
          </form>
          <div className="flex mx-auto gap-4">
            <button onClick={handleGoogleLogin} className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2 gap-2">
              <FaGoogle />
              Login With Google
            </button>
            <button onClick={handleGithubLogin} className="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 me-2 mb-2 gap-2">
              <FaGithub />
              Login With GitHub
            </button></div>
        </div>
      </div>
    </>
  )
}
