import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useUsers } from "./contexts/UsersContext";

export const EditUserForm = ({ user }) => {
  const { updateUser } = useUsers();
  const navigate = useNavigate();

  const [userData, setUserData] = useState({ ...user });

  const handleChange = (event) => {
    const fieldName = event.target.name;
    const value = event.target.value;

    setUserData((old) => {
      return {
        ...old,
        [fieldName]: value,
      };
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    updateUser(userData);
    navigate("/");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          required
          placeholder="Name"
          id="name"
          onChange={handleChange}
          value={userData.name}
          name={"name"}
        ></input>

        <label htmlFor="username">Username:</label>
        <input
          type="text"
          required
          placeholder="Username"
          id="username"
          onChange={handleChange}
          value={userData.username}
          name="username"
        ></input>
        <label htmlFor="mail">Email:</label>
        <input
          type="email"
          required
          placeholder="Email"
          id="mail"
          onChange={handleChange}
          value={userData.email}
          name="email"
        ></input>

        <label htmlFor="city">city:</label>
        <input
          type="text"
          required
          placeholder="City"
          id="city"
          onChange={handleChange}
          value={userData.city}
          name="city"
        ></input>

        <button>Cancel</button>
        <button type="submit">Submit</button>
        <NavLink to="/">
          <button>Back</button>
        </NavLink>
      </form>
    </>
  );
};
