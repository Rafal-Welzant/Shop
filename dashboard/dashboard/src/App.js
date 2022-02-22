import { useEffect, useState } from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Addform from "./Addform";
import Userstable from "./Userstable";

function App() {
  const [users, setUsers] = useState([]);

  const API =
    "https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data";

  useEffect(() => {
    fetch(API)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data);
      });
  }, []);

  const addUser = (name, mail) => {
    setUsers((oldState) => [
      ...oldState,
      {
        id: Date.now(),
        name: name,
        email: mail,
      },
    ]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Userstable users={users} setUsers={setUsers} />}
        />
        <Route
          path="/adduser"
          element={
            <Addform users={users} setUsers={setUsers} addUser={addUser} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
