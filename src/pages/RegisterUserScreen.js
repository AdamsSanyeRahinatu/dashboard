import React, { useState, useContext } from "react";
import {
  Button,
  Form,
  FormControl,

} from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UsersContext";

const RegisterUserScreen = () => {
  const { registerUser } = useContext(UserContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newuser = {
      name,
      email,
      password,
    };
    registerUser(newuser);
  };

  return (
    
        <div  style={{
          height: "80vh",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "50%",
          justifyContent: "center",
          alignItems: "center",
        }}>
          <Form onSubmit={handleSubmit} style={{
      display: "grid",
      gridTemplateColumns: "100%",
      justifyContent: "center",
      alignItems: "center",
      gridGap: 20,
      padding: "20px",
      border: "1px solid #36cfc9",
    }}>
      <Form.Label>
        <h1 style={{color:"#085f63"}}> REGISTER</h1>
      </Form.Label>
    
            
              <FormControl
              style={{ height:"1cm" }}
                placeholder="enter name"
                value={name}
                onChange={(text) => setName(text.target.value)}
              />
          
              
              <FormControl
              style={{ height:"1cm" }}
                placeholder="enter email"
                value={email}
                onChange={(text) => setEmail(text.target.value)}/>
            
              <FormControl
              style={{ height:"1cm" }}
                placeholder="enter password"
                value={password}
                onChange={(text) => setPassword(text.target.value)}
              />
            <Button type="submit">SIGN UP</Button>
            <div>
Have existing account
        <Link to="/login">
          sign in
          </Link>
          </div>
            </Form>
            </div>
  
  );
};

export default RegisterUserScreen;
