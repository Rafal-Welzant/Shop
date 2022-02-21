import { useEffect, useState } from "react";

function Addform({ users, setUsers }) {
  const [mail, setMail] = useState("");
  const [name, setName] = useState("");

  const addUser = (name, mail) => {
    setUsers([
      ...users,
      {
        name: name,
        email: mail,
      },
    ]);
  };

  function handleSubmit(e) {
    e.preventDefault();
    addUser(name, mail);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" placeholder="Name" id="name"></input>
        <label htmlFor="mail">Email:</label>
        <input type="email" placeholder="Email" id="mail"></input>
        <button>Cancel</button>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Addform;
