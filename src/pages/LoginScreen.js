
import { Button, Form } from "react-bootstrap";
import { UserContext } from "../context/UsersContext";
import { useLocation, useHistory, Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";


const LoginScreen = () => {
  const { loginUser, user } = useContext(UserContext);
  let location = useLocation();
  let history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const redirect = location.search ? location.search.split("=")[1] : "/dashboard";

  useEffect(() => {
    if (user.token) {
      history.push(redirect);
    }
  }, [history, user, redirect]);

  function handleSubmit(e) {
    e.preventDefault();
    const loginuser = {
      email,
      password,
    };

    loginUser(loginuser);
  }

  return (
    <div
      style={{
        height: "80vh",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "50%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form
        onSubmit={handleSubmit}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          justifyContent: "center",
          alignItems: "center",
          gridGap: 20,
          padding: "20px",
          border: "1px solid #36cfc9",
        }}
      > <Form.Label>
        <h1 style={{color:"#085f63"}}> LOG IN</h1>
      </Form.Label>
        <Form.Control
          style={{ height:"1cm" }}
          placeholder="enter email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Control
        style={{ height:"1cm" }}
          placeholder="enter password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">LOGIN</Button>
        <div>
New Here 
        <Link to="/register">
          sign up
          </Link>
          </div>
      </Form>
    </div>
  );
};

export default LoginScreen;
