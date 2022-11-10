import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = ({ service }) => {
    const { service_id, title, picture, fee, about } = service

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <PhotoProvider>
                <PhotoView src={picture}>
                    <figure><img className='h-72' src={picture} alt="Shoes" /></figure>
                </PhotoView>
            </PhotoProvider>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-2xl text-orange-600 font-semibold'>Price: ${fee}/session</p>
                <p>{about}</p>
                <div className="card-actions justify-end">

                    <button className="btn btn-primary">View Details</button>

                </div>

            </div>
        </div>
    );
};

export default ServiceCard;