import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import auth from "../firebase/firebase.init";
import { sendEmailVerification } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";


export default function Register() {

  const { registerUser, user } = useContext(AuthContext)
  const [errorpassword, setErrorPassword] = useState(null)
  const [checkbox, setCheckboox] = useState(null)
  const [weekPassword, setWeekPassword] = useState(null)
  const [showPassword, setShowPassword] = useState(true)
  const [showPassword2, setShowPassword2] = useState(true)
  const navigate = useNavigate()
  const [name, setName] = useState(null)
  const [photoURL, setPhotoURL] = useState(null)

  const handleShowPassWord = () => {
    setShowPassword(!showPassword)
  }
  const handleShowPassWord2 = () => {
    setShowPassword2(!showPassword2)
  }

  const handleRegister = (e) => {
    e.preventDefault()

    const form = new FormData(e.currentTarget)
    const name = form.get('name')
    const photo = form.get('photo')
    const email = form.get('email')
    const password = form.get('password')
    const confirmpassword = form.get('confirmpassword')
    const checked = e.target.checked.checked;

    // setName(name);
    // setPhotoURL(photo);

    if (password !== confirmpassword) {
      setErrorPassword(`Confirm Password don't match`)
      return
    }
    if (password.length < 6) {
      setErrorPassword(`Password must be 6 ca`)
      return
    }

    if (!checked) {
      setCheckboox(`Please acceptd our 
        Accept Term & Conditions!`)
      return
    }

    //reset errors
    setErrorPassword('')
    setCheckboox('')

    registerUser(email, password)
      .then(() => {
        // const usr = result.user
        toast.success("Register Successfull")
        e.target.reset()
        navigate('/')
        //update data
        sendEmailVerification(auth.currentUser)
          .then(() => {
            toast('Email verification sent!')
            // ...
          });

      })
      .catch((err) => toast.error(err.message))
  }
  //password type chenk strong
  const strongPasswordck = (event) => {
    const password = event.target.value
    let regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).+$/;

    if (!regex.test(password)) {
      setWeekPassword(`Password Must be "Uppercase, Lowercase and Number"`)
      return
    } else {
      setWeekPassword('')
    }
  }



  return (
    <div className="min-h-svh flex items-center bg-base-200"><ToastContainer />
      <div className="card shrink-0 w-full max-w-2xl mx-auto shadow-2xl bg-base-100">
        <h2 className="text-center font-black text-4xl my-4">Register Now</h2>
        <form className="card-body" onSubmit={handleRegister}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input name="name" type="text" placeholder="Name" className="input input-bordered" required />
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input name="photo" type="text" placeholder="Photo URL" className="input input-bordered" />
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control relative">
            <label className="label">Password</label>
            <input name="password" onChange={strongPasswordck} type={!showPassword ? "text" : "password"} placeholder="password" className={errorpassword || weekPassword ? "border-red-600 input input-bordered" : "input input-bordered "} required />
            <div className="absolute right-2 top-14">
              {showPassword ? <span onClick={handleShowPassWord}><FaRegEye /></span> : <span onClick={handleShowPassWord}><FaRegEyeSlash /></span>
              }
            </div>
            {
              weekPassword && <p className="text-red-400">{weekPassword}</p> ||
              errorpassword && <p className="text-red-400">{errorpassword}</p>
            }
          </div>
          <div className="form-control relative">
            <label className="label relative">Confirm Password</label>
            <input name="confirmpassword" type={!showPassword2 ? "text" : "password"} placeholder="Confirm password" className={errorpassword ? "border-red-600 input input-bordered" : "input input-bordered "} required />
            <div className="absolute right-2 top-14">
              {showPassword2 ? <span onClick={handleShowPassWord2}><FaRegEye /></span> : <span onClick={handleShowPassWord2}><FaRegEyeSlash /></span>
              }
            </div>
            {
              errorpassword && <p className="text-red-400">{errorpassword}</p>
            }
            <div className="flex gap-4 mt-3 items-center">
              <input name="checked" type="checkbox" className={checkbox ? "checkbox checkbox-error" : "checkbox checkbox-success"} />
              <a className="label-text hover:underline">Accept Term & Conditions</a>
              {
                checkbox && <p className="text-red-400">{checkbox}</p>
              }
            </div>
          </div>
          <div className="form-control mt-6">
            <button className="text-gray-900 bg-gradient-to-r from-teal-300 to-lime-500 hover:bg-gradient-to-l hover:from-teal-300 hover:to-lime-500 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Register</button>
          </div>
          <p className="text-center py-4">Already Have An Account ?<Link to="/login" className="text-[#F75B5F] font-bold"> Login</Link></p>
        </form>
      </div>
    </div>
  )
}