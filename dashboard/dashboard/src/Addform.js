import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useUsers } from './contexts/UsersContext';

function Addform() {
  const { addUser } = useUsers();
  const [mail, setMail] = useState("");
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addUser(name, mail);
    setName("");
    setMail("");
  }

  function handleNameChange(e) {
    setName(e.target.value);  
  }

  function handleMailChange(e) {
    setMail(e.target.value); 
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
          onChange={handleNameChange}
          value={name}
        ></input>
        <label htmlFor="mail">Email:</label>
        <input
          type="email"
          required
          placeholder="Email"
          id="mail"
          onChange={handleMailChange}
          value={mail}
        ></input>
        <button>Cancel</button>
        <button type="submit">Submit</button>
        <NavLink to="/"><button>Back</button></NavLink>
      </form>
    </>
  );
}

export default Addform;
