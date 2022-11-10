import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { useLoaderData } from 'react-router-dom';
import MakeReview from './MakeReview';
import Reviews from './Reviews';


const ServiceDetails = () => {
    const { _id, title, picture, fee, about } = useLoaderData()
    return (
        <div>
            <div>
                <div className='grid grid-cols-2 my-5'>
                    <div>
                        <PhotoProvider>
                            <PhotoView src={picture}>
                                <img src={picture} alt="" />
                            </PhotoView>
                        </PhotoProvider>
                        <h2 className='text-3xl font-semibold'>{title}</h2>
                        <p className='text-2xl text-orange-600 font-semibold'>Price: ${fee}/session</p>
                    </div>
                    <div className='my-auto mx-5'>
                        <h3>{about}</h3>
                    </div>
                </div>
            </div>
            <Reviews></Reviews>
            <MakeReview></MakeReview>
        </div>
    );
};


export default ServiceDetails;