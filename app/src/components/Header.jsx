import { useNavigate } from "react-router-dom";
import { Navbar, Nav, Container, Badge, NavDropdown } from "react-bootstrap";
import { FaSearch, FaUser } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../assets/logo.png";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { logout } from "../slices/authSlice";
import SearchBox from "./SearchBox";

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <header>
      <Navbar
        variant="dark"
        expand="lg collapseOnSelect"
        style={{ background: "#cc0000", height: "60px" }}
      >
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img
                src={logo}
                alt="IMS"
                style={{ width: "50px", color: "white", paddingBottom: "10px" }}
              />
              &nbsp;Institue managment system
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {userInfo ? (
                <>
                  <SearchBox />
                  <LinkContainer to="/inquery">
                    <Nav.Link>Inquery</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/admission">
                    <Nav.Link>Admission</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/cart">
                    <Nav.Link>Fee Collection</Nav.Link>
                  </LinkContainer>
                  <NavDropdown title="Managment" id="username">
                    <LinkContainer to="/profile">
                      <NavDropdown.Item>Batches</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/profile">
                      <NavDropdown.Item>Course</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/profile">
                      <NavDropdown.Item>Fee managment</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/profile">
                      <NavDropdown.Item>Student details</NavDropdown.Item>
                    </LinkContainer>
                  </NavDropdown>
                  {userInfo && userInfo.isAdmin && (
                    <NavDropdown title="Admin" id="username">
                      <LinkContainer to="/admin/productlist">
                        <NavDropdown.Item>Employee managment</NavDropdown.Item>
                      </LinkContainer>
                    </NavDropdown>
                  )}
                  <LinkContainer onClick={logoutHandler} to="">
                    <Nav.Link>Logout</Nav.Link>
                  </LinkContainer>
                </>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>
                    <FaUser /> Login
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
