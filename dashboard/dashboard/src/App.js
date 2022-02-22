import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { AddUserForm } from "./AddUserForm";
import { UsersView } from "./UsersView";
import { EditUserView } from './EditUserView';

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
