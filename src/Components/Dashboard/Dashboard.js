import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../Hooks/useAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
import { getAuth } from 'firebase/auth';

const auth = getAuth(app);

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col">
                {/* <!-- Page content here --> */}
                <h2 className='text-2xl text-primary my-4' >Welcome to our Dashboard</h2> 
                <Outlet/>
                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            
            </div> 
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label> 
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                {/* <!-- Sidebar content here --> */}
                {admin && <li><Link to='/dashboard/addservice'> Add Service</Link></li>}
                {admin && <li><Link to='/dashboard/manageservice/'> Manage Service</Link></li> }
                    <li><Link to='/dashboard/order/'>Order</Link></li>
                    <li><Link to='/dashboard/addcomment/'>Add Comment</Link></li>
                    {admin &&  <li><Link to='/dashboard/managecomment/'>Manage Comment</Link></li>}
                    {admin && <li><Link to='/dashboard/users/'>All Users</Link></li>}
                </ul>
            
            </div>
        </div>
    );
};

export default Dashboard;