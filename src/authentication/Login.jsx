import { useContext, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FaGithub, FaGoogle } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../provider/AuthProvider";
import { Fade } from "react-awesome-reveal";



export default function Login() {
  const { loginUser, loginWithGoogle, loginWithgithub } = useContext(AuthContext)
  const [showPassword, setShowPassword] = useState(true)

  const handleShowPassWord = () => {
    setShowPassword(!showPassword)
  }

  const handleLogin = (e) => {
    e.preventDefault()

    const form = new FormData(e.currentTarget)
    const email = form.get('email')
    const password = form.get('password')
    loginUser(email, password)
      .then(() => {
        toast.success("Login Success")
      })
      .catch(error => toast.error(error.message))
  }

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .catch(error => toast.error(error.message))
  }

  const handleGithubLogin = () => {
    loginWithgithub()
      .catch(error => toast.error(error.message))
  }



  return (

    <div className="min-h-svh flex items-center bg-base-200"><ToastContainer />
      <div className="card shrink-0 w-full max-w-3xl mx-auto shadow-2xl bg-base-100">
        <Fade delay={200} direction="down">
          <h2 className="text-center font-black text-4xl my-4">Login Now</h2>
        </Fade>
        <form className="card-body" onSubmit={handleLogin}>
          <Fade delay={200} direction="down">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="email" className="input input-bordered" required />
            </div>
          </Fade>
          <Fade delay={250} direction="down">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type={!showPassword ? "text" : "password"} name="password" placeholder="password" className="input input-bordered" required />
              <div className="absolute right-4 top-1/2">
                {showPassword ? <span onClick={handleShowPassWord}><FaRegEye /></span> : <span onClick={handleShowPassWord}><FaRegEyeSlash /></span>
                }
              </div>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
          </Fade>
          <Fade delay={300} direction="down">
            <div className="form-control mt-6">
              <button className="text-gray-900 bg-gradient-to-r from-teal-300 to-lime-500 hover:bg-gradient-to-l hover:from-teal-300 hover:to-lime-500 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login</button>
            </div>
          </Fade>
          <Fade delay={350} direction="down">
            <p className="text-center py-4">You Don&apos;t Have Account ?<Link to="/register" className="text-[#F75B5F] font-bold"> Register</Link></p>
          </Fade>
        </form>
        <div className="flex mx-auto gap-4 pb-6">
          <Fade delay={380} direction="left">
            <button onClick={handleGoogleLogin} className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2 gap-2">
              <FaGoogle />
              Login With Google
            </button>
          </Fade>
          <Fade delay={380} direction="right">
          <button onClick={handleGithubLogin} className="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 me-2 mb-2 gap-2">
            <FaGithub />
            Login With GitHub
          </button>
        </Fade>
      </div>
    </div>
    </div >
  )
}
