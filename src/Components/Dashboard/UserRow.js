import React from "react";

const UserRow = ({ user }) => {
console.log(user);
  return (
      <tr>
        <th> {user?.email} </th>
        <td> {user?._id} </td>
        <td> <button class="btn btn-xs"> Make A Admin </button> </td>
        <td> <button class="btn btn-xs"> Admin </button> </td>
      </tr>
  );
};

export default UserRow;
