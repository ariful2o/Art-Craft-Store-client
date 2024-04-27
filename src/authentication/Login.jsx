import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";



export default function Login() {
  const [showPassword, setShowPassword] = useState(true)
  const handleShowPassWord = () => {
    setShowPassword(!showPassword)
  }
  return (

    <div className="min-h-svh flex items-center bg-base-200">
      <div className="card shrink-0 w-full max-w-3xl mx-auto shadow-2xl bg-base-100">
        <h2 className="text-center font-black text-4xl my-4">Login Now</h2>
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type={!showPassword ? "text" : "password"} placeholder="password" className="input input-bordered" required />
            <div className="absolute right-11 top-[250px]">
              {showPassword ? <span onClick={handleShowPassWord}><FaRegEye /></span> : <span onClick={handleShowPassWord}><FaRegEyeSlash /></span>
              }
            </div>
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="text-gray-900 bg-gradient-to-r from-teal-300 to-lime-500 hover:bg-gradient-to-l hover:from-teal-300 hover:to-lime-500 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login</button>
          </div>
          <p className="text-center py-4">You Don&apos;t Have Account ?<Link to="/register" className="text-[#F75B5F] font-bold"> Register</Link></p>
        </form>
      </div>
    </div>

  )
}
