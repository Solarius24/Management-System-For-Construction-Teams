import { NavItem, NavLink } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import ModalSwitchProject from "./modals/ModalSwitchProject";
import { useState } from "react";
import ModalSwitchBusinessUnit from "./modals/ModalSwitchBusinessUnit";

const NavBar = () => {
  const [showSwitchProjectModal, setShowSwitchProjectModal] = useState(false);
  const [showSwitchBusinessUnitModal, setShowBusinsessUnitModal] =
    useState(false);
  const [navbarItemSelected, setNavbarItemSelected] = useState("");
  console.log(navbarItemSelected);

  const handleSelect = (eventKey: any) => {
    setNavbarItemSelected(eventKey);
    if (eventKey === "SwitchProject") {
      setShowSwitchProjectModal(true);
    } else if (eventKey === "SwitchBusinessUnit") {
      setShowBusinsessUnitModal(true);
    }
  };

  const handleClose = () => {
    if (navbarItemSelected === "SwitchProject") {
      setShowSwitchProjectModal(false);
    } else if (navbarItemSelected === "SwitchBusinessUnit") {
      setShowBusinsessUnitModal(false);
    }
  };

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" fixed="top" expand="lg">
        <Nav className="me-auto mx-3">
          <NavItem>
            <NavLink>
              <Link
                style={{
                  textDecoration: "none",
                  color: "#fff",
                }}
                to="/"
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
              <Link
                style={{
                  textDecoration: "none",
                  color: "#fff",
                }}
                to="/assets"
              >
                ASSETS
              </Link>
            </NavLink>
          </Nav.Item>
        </Nav>
        <Nav className="mx-5">
          <NavDropdown
            title="USER NAME"
            id="nav-dropdown"
            className="mx-5"
            onSelect={handleSelect}
          >
            <NavDropdown.Item eventKey="SwitchProject">
              Switch Project
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="SwitchBusinessUnit">
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
      <ModalSwitchProject show={showSwitchProjectModal} onHide={handleClose} />
      <ModalSwitchBusinessUnit
        show={showSwitchBusinessUnitModal}
        onHide={handleClose}
      />
    </>
  );
};

export default NavBar;
