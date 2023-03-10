import React from 'react';
import { HiTrash, HiPencilAlt } from "react-icons/hi";
import { Link } from 'react-router-dom';
const ManageServiceData = ({service, services, setServices, handleDeleteService}) => {

    console.log("Manage service data", service);
    return (
        <div>
      <tr>
        <td>
          <div class="flex items-center space-x-3">
            <div class="avatar">
              <div class="mask mask-squircle w-12 h-12">
                <img src={service?.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>
          {service?.name}
         </td>
        <td> { service?.budget}</td>
        <td>
          <button onClick={()=>handleDeleteService(service._id)} className="btn btn-ghost btn-xs"> <HiTrash/> </button>
        </td>
        <td>
         <Link to={`/dashboard/updateservice/${service._id}`} > <button className="btn btn-ghost btn-xs"> <HiPencilAlt/> </button> </Link>
        </td>
      </tr>
        </div>
    );
};

export default ManageServiceData;