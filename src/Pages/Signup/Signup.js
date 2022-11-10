import React, { useContext } from 'react';
import Lottie from 'lottie-react'
import { toast } from 'react-toastify'
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate, useLocation } from 'react-router-dom'
import signupAnime from '../../assets/signupAnime.json'
import { AuthContext } from '../../contexts/AuthProvider';

const Signup = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const { createUser, signInWithGoogle } = useContext(AuthContext)

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
            })
        toast.success('signed in with google')
        navigate(from, { replace: true })
    }

    const handleSignup = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value

        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
            })
            .catch(err => console.error(err))
        form.reset()
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left max-w-sm">
                    <Lottie animationData={signupAnime} loop={true}></Lottie>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-10">
                    <form onSubmit={handleSignup} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name'
                                placeholder="your name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text"
                                name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"
                                name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Signup</button>
                        </div>
                    </form>
                    <p className='text-center'>Already have an account? Please <Link className='text-orange-600 font-bold' to='/login'>Login</Link></p>
                    <div className="form-control mt-6 mx-auto">
                        <button className="btn btn-primary" onClick={handleGoogleSignIn}>Login with <FcGoogle></FcGoogle></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;