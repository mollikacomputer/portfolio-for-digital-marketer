import React from 'react';
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
            {/* <!-- Page content here --> */}
            <label for="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>
        </div> 
        <div className="drawer-side">
            <label for="my-drawer" className="drawer-overlay"></label>
            <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li><NavLink to='/'>Sidebar Item 1</NavLink></li>
            <li><NavLink to='/'>Sidebar Item 2</NavLink></li>
            
            </ul>
        </div>
        </div>
    );
};

export default Dashboard;