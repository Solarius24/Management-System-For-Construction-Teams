import { NavItem, NavLink } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
    
      <Navbar bg="dark" data-bs-theme="dark" fixed="top" expand="lg" >
          <Nav className="me-auto mx-3">
            <NavItem>
              <NavLink>
                <Link
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                  }}
                  to="/dashboard?tabid=01"
                >
                  FIELD VIEW
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                  }}
                  to="/forms"
                >
                  FORMS
                </Link>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink>
                <Link
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                  }}
                  to="/tasks"
                >
                  TASKS
                </Link>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink>
                <Link
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                  }}
                  to="/processes"
                >
                  PROCESSES
                </Link>
              </NavLink>
            </NavItem>

            <Nav.Item>
              <NavLink>
                <Link         style={{
                    textDecoration: "none",
                    color: "#fff",
                  }} to="/assets">ASSETS</Link>
              </NavLink>
            </Nav.Item>
          </Nav>
          <Nav className="mx-5">
            <NavDropdown title="USER NAME" id="nav-dropdown" className="mx-5">
              <NavDropdown.Item eventKey="4.1">Switch Project</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="4.2">
                Switch Business Unit
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="4.3">My Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="4.4">Project Setup</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="4.5">Business Setup</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="4.6">
                ViewPoint For Projects
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="4.7">Sign off</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="4.8">
                Viewpoint Privacy Notice
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
      </Navbar>
    </>
  );
};

export default NavBar;
