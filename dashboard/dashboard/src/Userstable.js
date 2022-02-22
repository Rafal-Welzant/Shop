import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Userstable({ users, setUsers }) {
  const [editUser, seteditUser] = useState(null);
  const [userList, setUserList] = useState([]);

  const userRemover = (id) => {
    setUsers((prevValue) => {
      return prevValue.filter((user) => {
        return user.id !== id;
      });
    });
  };

  const enterEditMode = (userId, value) => {
    seteditUser({ userId, value });
  };

  return (
    <>
      <NavLink to="/adduser">
        <button>Add new</button>
      </NavLink>

      <table>
        <tbody>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          {/* <th>City</th> */}
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            {/* <td>{user.address.city}</td> */}
            <td>
              <button  onClick={() => enterEditMode(user.id, user.name)}>{editUser !== null && editUser.userId === user.id ? (
                      <input
                        value={editUser.value}
                        onChange={(e) => {
                          seteditUser({
                            userId: user.id,
                            value: e.target.value,
                          });
                        }}
                        onKeyDown={(event) => {
                          if (event.key === "Enter") {
                            setUserList((all) =>
                              all.map((item) =>
                                user.id === user.id
                                  ? { ...item, text: editUser.value }
                                  : item
                              )
                            );
                            seteditUser(null);
                          }
                          if (event.key === "Escape") {
                            seteditUser(null);
                          }
                        }}
                      />
                    ) : (
                      user.name
                    )}</button>
            </td>
            <td>
              <button onClick={() => userRemover(user.id)}>Delete</button>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </>
  );
}

export default Userstable;
