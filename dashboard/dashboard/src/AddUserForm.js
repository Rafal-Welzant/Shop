import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useUsers } from './contexts/UsersContext';

export const AddUserForm = () => {
  const { addUser } = useUsers();
  const navigate = useNavigate();

  const [userData, setUserData] = useState({ name: '', email: '' });

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
    addUser(userData).then(() => navigate('/'));
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
          name="name"
        ></input>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          required
          placeholder="Email"
          id="email"
          onChange={handleChange}
          value={userData.email}
          name="email"
        ></input>
        <button>Cancel</button>
        <button type="submit">Submit</button>
        <NavLink to="/"><button>Back</button></NavLink>
      </form>
    </>
  );
}