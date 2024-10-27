import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Landing from "./pages/Landing";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([
    {
      username: "Aishu",
      password: "123"
    }
  ]);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login users={users} setUsers={setUsers} />} />
          <Route path="/signup" element={<Signup users={users} setUsers={setUsers} />} />
          <Route path="/landing" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
