import { useState, useContext } from "react";
import { UserContext } from "../contexts/UsersContext";
import { Link } from "react-router-dom";
import logo from "../images/efampt.png";
import { AiFillCloseCircle, FiLogOut, FiUser } from "react-icons/all";
import {
  Container,
  Input,
  Modal,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
} from "reactstrap";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import CloseBtn from "./CloseBtn";
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
    <Navbar
      className="navbar navbar-expand-lg navbar-dark "
      style={{ background: "#3b5441", boxShadow: " 2px 5px #888888" }}
    >
      <Container>
        <NavbarBrand>
          <Link to="/">
            <img
              style={{ width: "auto", height: 50 }}
              src={logo}
              alt="E-FAMP"
            />
          </Link>
        </NavbarBrand>
        <Input placeholder="search product" className="w-25 mt-3" />
        <Nav className="navbar-nav">
          <NavItem>
            <Link to="/" className="nav-link">
              <NavLink>Home</NavLink>
            </Link>
          </NavItem>
          {user.token ? (
            <>
              <Nav.Link>
                <Link to="/additem" className="nav-link">
                  ADD
                </Link>
              </Nav.Link>
              <NavItem>
                <Link to="/products" className="nav-link">
                  <NavLink>Products</NavLink>
                </Link>
              </NavItem>
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
            </>
          ) : (
            <>
              <NavItem>
                <Link className="nav-link">
                  <NavLink onClick={toggleShowSignUp} as="button">
                    sign up
                  </NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link">
                  <NavLink onClick={toggleShowLogin}>sign in</NavLink>
                </Link>
              </NavItem>
            </>
          )}
          <NavItem>
            <Link className="nav-link">
              <NavLink>contact</NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link">
              <NavLink>About</NavLink>
            </Link>
          </NavItem>
        </Nav>
      </Container>
      {/* modal is down */}
      <Modal isOpen={showSignUp} onDoubleClick={toggleShowSignUp}>
        <CloseBtn>
          <h3>Register new account here</h3>
          <AiFillCloseCircle onClick={toggleShowSignUp} size={40} />
        </CloseBtn>
        <SignUp />
      </Modal>
      <Modal isOpen={showlogin} onDoubleClick={toggleShowLogin}>
        <CloseBtn>
          <h3>LOGIN HERE</h3>
          <AiFillCloseCircle onClick={toggleShowLogin} size={40} />
        </CloseBtn>
        <SignIn />
      </Modal>
    </Navbar>
  );
};

export default Header;
