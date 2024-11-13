import  { useState } from "react";
import "./login.css";
import { FaUserAlt, FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
const Login = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [mail,setMail] = useState('')
  const [pwd,setPwd] = useState('')

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    if (validate()) {
      try {
        // Fetch the users from the mock API
        const response = await axios.get("http://localhost:3000/users");
      
        // Find a user with the provided email
        const user = response.data.find((u) => u.mail === mail);
      
        if (user) {
          // If email matches, check the password
          if (user.password === pwd) {
            // Successful login
            toast.success("Login successful!", {
              className: "successToast",
            });
            navigate("/");
          } else {
            // Password is incorrect
            toast.error("Invalid password.");
          }
        } else {
          // Email not found, prompt to register
          toast.error("Email not registered. Please sign up.");
        }
      } catch (error) {
        console.error("Error during authentication:", error);
        toast.error("Failed to login. Please try again later.");
      }
      
    }
  };
  

  const validate = () =>{
    let result = true
    if(mail === '' || mail===null){
      result = false
      toast.warning('Please Enter the Mail Id', {
        className: 'toast-error',
        position: "top-center",
      })
    }
    if(pwd==='' || pwd===null){
      result = false
      toast.warning("Please Enter the password", {
        className: 'toast-error',
        position: "top-center",
      })
    }
    return result
  }


  return (
    <div className="background">
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="input-box">
            <input type="email" value={mail} onChange={(e)=>setMail(e.target.value)} placeholder="Email" />
            <FaUserAlt className="icon" />
          </div>
          <div className="input-box">
            <input value={pwd} onChange={(e)=>setPwd(e.target.value)} type={passwordType} placeholder="Password"  />
            <span
              className="password-toggle"
              onClick={togglePasswordVisibility}
            >
              {passwordType === "password" ? (
                <FaEyeSlash className="icon" />
              ) : (
                <FaEye className="icon" />
              )}
            </span>
          </div>
          <div className="remember-forgot">
            {/* <label>
              <input type="checkbox" /> Remember
            </label> */}
            <a href="#1">Forgot password?</a>
          </div>
          <button type="submit" >
            Login
          </button>
          <div className="register-link">
            <p>
              Don't have an account?{" "}
              <a href="register" onClick={() => navigate("/register")}>
                Register
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
