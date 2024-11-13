import { FaUserAlt, FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { MdEmail } from "react-icons/md";
import "./register.css";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
// import { response } from "express";
const Register = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordType1, setPasswordType1] = useState("password");
  const [name,setName] = useState('')
  const [mail,setMail] = useState('')
  const [pwd,setPwd] = useState('')
  const [cpwd,setCpwd] = useState('')

  const togglePasswordVisibility = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };
  const togglePasswordVisibility1 = () => {
    setPasswordType1(passwordType1 === "password" ? "text" : "password");
  };
  const navigate = useNavigate();
  const handleSubmit = async(e) =>{
        e.preventDefault();
        if(validate())
        {
            try{
                const response = await axios.get('http://localhost:3000/users');
                const existingUsers = response.data;

                const exists = existingUsers.some(u=>u.mail===mail)

                if(exists)
                {
                  toast.warning("User already exists")
                  return 
                }
                await axios.post('http://localhost:3000/users',{
                username:name,
                mail:mail,
                password:pwd
              })
            toast.success('Registration successful!', {
              className: "successToast"
            });
            navigate('/')
            setName('');
            setMail('');
            setPwd('');
            setCpwd('');
          } catch (error) {
            console.error('Error during registration:', error);
            toast.error('Registration failed. Please try again later.');
          }
        }
      };

const validate = () =>{
      let result = true
      if(name===''||name===null)
      {
        result = false
        toast.warning("Please Enter the Username")
      }
      if(mail===''||mail===null)
      {
        result = false
        toast.warning("Please Enter the mail")
      }
      if(pwd===''||pwd===null)
      {
        result = false
        toast.warning("Please Enter the password")
      }
      if(cpwd===''||cpwd===null)
      {
        result = false
        toast.warning("Please Confirm the password")
      }
      if(pwd!==cpwd)
      {
        result=false
        toast.warning("Passwords do not match.")
      }
      return result
  }

  return (
    <div className="background">
      <div className="wrapper">
        <form action="" onSubmit={handleSubmit}>
          <h1>Register</h1>
          <div className="input-box">
            <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Username"/>
            <FaUserAlt className="icon" />
          </div>
          <div className="input-box">
            <input value={mail} onChange={(e)=>setMail(e.target.value)} type="email" placeholder="Email"  />
            <MdEmail className="icon" />
          </div>

          <div className="input-box">
              <input
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
                type={passwordType}
                placeholder="Password"
              />
              <span
                onClick={togglePasswordVisibility}
                // aria-label={passwordType === "password" ? "text" : "password"}
                role="button"
              >
                {passwordType === "password" ? (
                  <FaEyeSlash className="icon" />
                ) : (
                  <FaEye className="icon" />
                )}
              </span>
            </div>

          <div className="input-box">
            <input
              value={cpwd}
              onChange={(e)=>setCpwd(e.target.value)}
              type={passwordType1}
              placeholder="Confirm Password"
            />
            <span onClick={togglePasswordVisibility1}>
              {passwordType1 === "password" ? (
                <FaEyeSlash className="icon" />
              ) : (
                <FaEye className="icon" />
              )}
            </span>
          </div>

          <button type="submit">
            Register
          </button>

          <div className="register-link">
            <p>
              Click here to{" "}
              <a href="login" onClick={() => navigate("/login")}>
                {" "}
               Login
              </a>
            
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
