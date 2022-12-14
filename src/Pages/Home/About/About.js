import React from 'react';
import Lottie from 'lottie-react'
import { Link } from 'react-router-dom'
import aboutUs from '../../../assets/77877-about-us.json'

const About = () => {
    return (
        <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className='relative w-1/2'>
                    <Lottie animationData={aboutUs} loop={true}></Lottie>
                </div>
                <div className='w-1/2'>
                    <p className='font-bold text-2xl text-orange-600'>About Us</p>
                    <h1 className="my-5 text-5xl font-bold">
                        We are certified <br />
                        & have more than  <br />
                        <span className='font-bold text-6xl text-orange-600'>15</span> years of experience</h1>
                    <p className="py-2">We are trained and certified psycologists here waiting for you to hear from you. Just call our hotline number and book your time.</p>
                    <button className="btn btn-primary"><Link to='/'>Get More Info</Link></button>
                </div>
            </div>
        </div>
    );
};

export default About;