import { useEffect, useState } from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { AddUserForm } from "./AddUserForm";
import { UsersView } from "./UsersView";
import { EditUserView } from './EditUserView';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<UsersView />}
        />
        <Route
          path="/adduser"
          element={
            <AddUserForm />
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
