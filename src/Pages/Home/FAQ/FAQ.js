import React from 'react';

const FAQ = () => {
    return (
        <div className='mx-20 mt-5'>
            <h1 className='text-3xl font-bold'>FAQ</h1>
            <div className="collapse mt-5 mb-1">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    When is your counselling time ?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>Please contact and book your time. We are always here waiting for you.</p>
                </div>
            </div>
            <div className="collapse mb-1">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    How long will be a session take?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>You will be given as many time as you need. Don't worry about time. We are here for you.</p>
                </div>
            </div>
            <div className="collapse mb-1">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    Can I pause and restart anytime?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>Yes, of course you can. You have the full flexibility. We feel you. You are the most priority.</p>
                </div>
            </div>
            <div className="collapse mb-5">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    How many time should I come?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>It depends on your condition. But again don't worry about fees. As I said before you are my most priority</p>
                </div>
            </div>
        </div>
    );
};

export default FAQ;