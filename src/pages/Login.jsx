import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login(props) {

    const navigate=useNavigate()

    const [eusername, setEusername] = useState('');
    const [epassword, setEpassword] = useState('');
    const [ruser, setRuser] = useState(true);

    const users =props.users
    const setusers =props.setusers


    function handleUInput(event) {
        setEusername(event.target.value);
    }

    function handlePInput(event) {
        setEpassword(event.target.value); 
    }
    function checkUser() {
        let userFound = false;
        users.forEach(function(item) {
            if (item.username === eusername && item.password === epassword) {
                alert("Login successful!");
                userFound = true;
                navigate("/Landing", { state: { user: eusername } }); // Ensure user is passed here
            }
        });
    
        if (!userFound) {
            alert("Login failed!");
            setRuser(false);
        }
    }
    
    return (
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3xl font-medium"> Hey Hi </h1>
                {ruser ? (
                    <p>I help you manage your activities after your login :)</p>
                ) : (
                    <p className="text-red-400">Please sign up before you login</p>
                )}

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

                    <button className="bg-[#8272DA] w-24 p-1 rounded-md" onClick={checkUser}>Login</button>

                    <p>Create an account <Link to={"/Signup"} className="underline">Signup</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Login;
