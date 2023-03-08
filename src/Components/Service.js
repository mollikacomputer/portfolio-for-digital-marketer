import { getAuth } from 'firebase/auth';
import React from 'react';
import {useAuthState} from "react-firebase-hooks/auth";
import app from '../firebase.init';
const auth = getAuth(app);
const Service = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div>
            <h2 className='text-3xl' > Service</h2>
            Current user: { user ? user.displayName : "no body" }
        </div>
    );
};

export default Service;