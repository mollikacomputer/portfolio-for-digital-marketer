import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import UserRow from "./UserRow";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`https://portfolio-walid-server-mollikacomputer.vercel.app/users/`,{
      method:"GET",
      headers:{
        'authorization':`Bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  
  return (
    <div>
      <h2 className="text-2xl">All Users {users.length} </h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>email</th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {
            users.map( user => <UserRow key={user?._id} user={user}></UserRow>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
