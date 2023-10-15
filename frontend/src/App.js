import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Login } from "./component/Login";
import { Users } from "./pages/Users";
import { AddUser } from "./pages/AddUser";
import { EditUser } from "./pages/EditUser";
import { Locations } from "./pages/Locations";
import { AddLocation } from "./pages/AddLocation";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/edit/:id" element={<EditUser />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/locations/add" element={<AddLocation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
