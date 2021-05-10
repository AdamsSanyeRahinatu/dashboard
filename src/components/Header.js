import React from "react";
import { Link } from "react-router-dom";
import { FiLogOut, FiUser, FiUserPlus } from "react-icons/fi";
import { useState, useContext } from "react";
import { UserContext } from "../context/UsersContext";
import { NavDropdown } from "react-bootstrap";

const Header = () => {
  const [showlogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const toggleShowLogin = () => setShowLogin(!showlogin);
  const toggleShowSignUp = () => setShowSignUp(!showSignUp);

  const { logout, user } = useContext(UserContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <header id="navbar">
      <Link to="/">
      <h1 id="logo">TRACK MY ALL</h1>
      </Link>
      <ul>
       
        {user.token ? (
        <li>
        <NavDropdown
                title={
                  <FiUser
                    size={25}
                    style={{
                      border: "2px solid #000",
                      borderRadius: 20,
                      padding: 1,
                    }}
                  />
                }
              >
                <NavDropdown.Item>{user.name}</NavDropdown.Item>
                <NavDropdown.Item>{user.email}</NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/" className="nav-link" onClick={handleLogout}>
                    <FiLogOut size={30} />
                    Logout
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
             
        </li> ):(
          <>
           <li>
           <Link to="/" >
            LOG IN <FiUser size={35} />
           </Link>
         </li>
         <li>
           <Link to="/register" >
             SIGN UP
             <FiUserPlus size={35} />
           </Link>
         </li>
         </>
        )}
        
      </ul>
    </header>
  );
};

export default Header;
