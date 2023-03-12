import React from 'react';
import { HiTrash, HiPencilAlt } from "react-icons/hi";
import { Link } from 'react-router-dom';

const ManageCommentData = ({comment, comments, setComments, handleDeleteComment}) => {

    console.log("Manage service data", comment);
    return (
        <>
      <tr>
        <td>
          <div class="flex items-center space-x-3">
            <div class="avatar">
              <div class="mask mask-squircle w-12 h-12">
                <img src={comment?.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>
          {comment?.name}
         </td>
        <td> { comment?.location}</td>
        <td>
          <button onClick={()=>handleDeleteComment(comment._id)} className="btn btn-ghost btn-xs"> <HiTrash/> </button>
        </td>
        <td>
         <Link to={`/dashboard/updatecomment/${comment._id}`} > <button className="btn btn-ghost btn-xs"> <HiPencilAlt/> </button> </Link>
        </td>
      </tr>
        </>
    );
};

export default ManageCommentData;
