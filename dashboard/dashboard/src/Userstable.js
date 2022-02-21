import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Userstable({ users, setUsers }) {
  const API =
    "https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data";

  useEffect(() => {
    fetch(API)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        console.log(data);
      });
  }, []);

  return (
    <>
      <NavLink to="/adduser">
        <button>Add new</button>
      </NavLink>
      {users.map((user) => (
        <table>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>City</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.city}</td>
          </tr>
        </table>
      ))}
    </>
  );
}

export default Userstable;
