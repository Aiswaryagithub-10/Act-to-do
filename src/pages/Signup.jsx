import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup({ users, setUsers }) {
  const navigate = useNavigate();

  const [eusername, setEusername] = useState("");
  const [epassword, setEpassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

   function handleUInput(event) {
    setEusername(event.target.value);
  }

  function handlePInput(event) {
    setEpassword(event.target.value);
  }

  function handleConfirmPasswordInput(event) {
    setConfirmPassword(event.target.value);
  }

   function addUser() {
    if (epassword !== confirmPassword) {
      alert("Passwords do not match!");  
      return;
    }

    setUsers([...users, { username: eusername, password: epassword }]);
    navigate("/");
  }

  return (
    <div className="bg-black p-10">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <h1 className="text-3xl font-medium">Hey Hi</h1>
        <p>Sign up here :)</p>

        <div className="flex flex-col gap-2 my-2">
          <input
            type="text"
            className="w-52 border-black p-1 bg-transparent border rounded-md"
            placeholder="Username"
            onChange={handleUInput}
          />

          <input
            type="password"
            className="w-52 border-black p-1 bg-transparent border rounded-md"
            placeholder="Password"
            onChange={handlePInput}
          />

          <input
            type="password"
            className="w-52 border-black p-1 bg-transparent border rounded-md"
            placeholder="Confirm Password"
            onChange={handleConfirmPasswordInput}
          />

          <button className="bg-[#FCA201] w-24 p-1 rounded-md" onClick={addUser}>
            Sign up
          </button>

          <p>
            Already have an account?{" "}
            <Link to="/" className="underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;