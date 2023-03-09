import React from 'react';
import { HiTrash, HiPencilAlt } from "react-icons/hi";
const ManageServiceData = ({service}) => {
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
        <th>
          <button className="btn btn-ghost btn-xs"> <HiTrash/> </button>
        </th>
        <th>
          <button className="btn btn-ghost btn-xs"> <HiPencilAlt/> </button>
        </th>
      </tr>
        </div>
    );
};

export default ManageServiceData;