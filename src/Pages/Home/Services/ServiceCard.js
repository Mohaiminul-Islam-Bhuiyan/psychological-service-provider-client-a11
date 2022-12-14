import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, title, picture, fee, about } = service

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <PhotoProvider>
                <PhotoView src={picture}>
                    <figure><img className='h-72' src={picture} alt="" /></figure>
                </PhotoView>
            </PhotoProvider>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-2xl text-orange-600 font-semibold'>Price: ${fee}/session</p>
                <p>
                    {
                        about.length > 100 ?
                            <>{about.slice(0, 100) + '...'}</>
                            :
                            about
                    }
                </p>
                <div className="card-actions justify-end">
                    <Link to={`/services/${_id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default ServiceCard;