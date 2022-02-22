import { NavLink, useNavigate } from "react-router-dom";
import { useUsers } from "./contexts/UsersContext"

export const UsersView = () => {
  const { users, removeUser } = useUsers();
  const navigate = useNavigate()

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
          <th>City</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.city}</td>
            <td>
              <button onClick={() => navigate(`/edit/${user.id}`)}>Edit</button>
            </td>
            <td>
              <button onClick={() => removeUser(user.id)}>Delete</button>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </>
  );
}
