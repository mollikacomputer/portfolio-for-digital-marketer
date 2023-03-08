import React from 'react';
import useFirebase from '../useHooks/useFirebase';

const Order = () => {
    const {user} = useFirebase();
    return (
        <div>
            <h2 className='text-3xl' > Order Page</h2>
            Current User :{ user ? user.displayName : "No body" }
        </div>
    );
};

export default Order;