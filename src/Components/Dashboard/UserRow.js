import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const UserRow = ({ user }) => {

const {email, role} = user;
const [users, setUsers] = useState([]);
const makeAdmin = () =>{
  fetch(`https://walid-server.vercel.app/users/admin/${email}`,{
    method:"PUT",
    headers:{
      authorization:`Bearer ${localStorage.getItem('accessToken')}`
    }
  })
  .then(res=>{
    if(res.status === 403 ){
      toast.error(`Fail to make an admin`)
    }
    return res.json()
  })
  .then(data => {
    if(data.modifiedCount > 0 ){
      toast.success(`Successfully made an admin`)
    }
    console.log(data);
  })
};

const handleDeleteUser = (id) =>{
  const proceed = window.confirm("Are you sure you want to delete?");
  if(proceed){
    // console.log("deleting service data with id", id);
    const url = `https://walid-server.vercel.app/users/${id}`;
    fetch(url, {
      method: 'DELETE'
    })
    .then(res=> res.json())
    .then(data => {
      if(data.deletedCount>0){
        // console.log('deleted');
        const remaining = users.filter(user => user?._id !== id );
        setUsers(remaining);
      }
      console.log(users);

    })
  }
};

  return (
      <tr>
        <th> {user?.email} </th>
        <td> {user?._id} </td>
        <td> {role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs"> Make Admin </button>} </td>
        <td> <button onClick={()=>handleDeleteUser(user._id)} className="btn btn-xs"> Remove User </button> </td>
        <ToastContainer />
      </tr>
  );
};

export default UserRow;
