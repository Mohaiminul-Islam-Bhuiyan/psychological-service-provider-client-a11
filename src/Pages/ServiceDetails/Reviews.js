import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const Reviews = () => {
    const { user, logout } = useContext(AuthContext)
    const [reviews, setreviews] = useState([])

    useEffect(() => {
        fetch(``)
    })
    return (
        <div>
            this is review
        </div>
    );
};

export default Reviews;