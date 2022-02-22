import { useEffect, useState } from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Addform from "./Addform";
import Userstable from "./Userstable";
import { EditUserView } from './EditUserView';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Userstable />}
        />
        <Route
          path="/adduser"
          element={
            <Addform />
          }
        />
        <Route
          path="/edit/:userId"
          element={
            <EditUserView />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
