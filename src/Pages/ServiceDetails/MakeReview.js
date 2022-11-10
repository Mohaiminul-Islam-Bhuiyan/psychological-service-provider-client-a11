import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';


const MakeReview = () => {
    const { _id, title } = useLoaderData()
    const { user } = useContext(AuthContext)


    const handleAddReview = event => {
        event.preventDefault()
        const form = event.target
        const name = `${form.firstName.value} ${form.lastName.value}`
        const email = user?.email || 'unregistered'
        const phone = form.phone.value
        const message = form.message.value

        const review = {
            service: _id,
            serviceName: title,
            customer: name,
            email,
            phone,
            message
        }

        // if(phone.length < 11){
        //     alert('phone number should be 11 characters')
        // }
        // else{

        // }
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('review added successfully')
                    form.reset()
                }
            })
            .catch(err => console.error(err))
    }

    return (
        <div>
            <form onSubmit={handleAddReview}>
                <h2 className="text-4xl mb-3">{title}</h2>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name='firstName' type="text" placeholder="First name" className="input input-bordered w-full" />
                    <input name='lastName' type="text" placeholder="Last name" className="input input-bordered w-full" />
                    <input name='phone' type="text" placeholder="Your phone" className="input input-bordered w-full" required />
                    <input name='email' type="text" placeholder="Your email" defaultValue={user?.email} className="input input-bordered w-full" readOnly />
                </div>
                <textarea name='message' className="textarea textarea-bordered h-24 w-full mt-3" placeholder="Your review"></textarea>
                <input className='btn btn-primary mb-3' type="submit" value="Add Review" />
            </form>
        </div>
    );
};

export default MakeReview;