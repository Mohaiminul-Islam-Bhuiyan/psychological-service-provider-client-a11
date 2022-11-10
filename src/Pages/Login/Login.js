import React, { useContext, useState } from 'react';
import Lottie from 'lottie-react'
import { FcGoogle } from "react-icons/fc";
import { toast } from 'react-toastify'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import loginAnime from '../../assets/106680-login-and-sign-up.json'
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {
    const [userEmail, setUserEmail] = useState('')
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/'

    const { login, signInWithGoogle, resetPassword } = useContext(AuthContext)

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value

        login(email, password)
            .then(result => {
                toast.success('login successful')
                navigate(from, { replace: true })
                console.log(result.user);
            })
            .catch(err => console.error(err))
        form.reset()
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                navigate(from, { replace: true })
            })
    }

    const handleReset = () => {
        resetPassword(userEmail)
            .then(() => {
                toast.success('reset link has been sent, please check email')
            })
            .catch(err => toast.error(err.message))
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left max-w-sm">
                    <Lottie animationData={loginAnime} loop={true}></Lottie>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-10">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input onBlur={event => setUserEmail(event.target.value)} type="text" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <button onClick={handleReset} className="label-text-alt link link-hover">Forgot password?</button>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className='text-center'>New here! Please <Link className='text-orange-600 font-bold' to='/signup'>Sign Up</Link></p>
                    <div className="form-control mt-6 mx-auto">
                        <button className="btn btn-primary" onClick={handleGoogleSignIn}>Login with <FcGoogle></FcGoogle></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;