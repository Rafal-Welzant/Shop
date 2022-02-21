import { useEffect, useState } from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Addform from "./Addform";
import Userstable from "./Userstable";

function App() {
  const [users, setUsers] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Userstable users={users} setUsers={setUsers} />}
        />
        <Route path="/adduser" element={<Addform />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
