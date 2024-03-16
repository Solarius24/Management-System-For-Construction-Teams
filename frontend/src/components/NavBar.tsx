import { NavItem, NavLink } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import ModalSwitchProject from "./modals/ModalSwitchProject";
import { useState } from "react";
import ModalMySettings from "./modals/ModalMySettings";
import ModalProjectSetup from "./modals/ModalProjectSetup";

const NavBar = () => {
  const [showSwitchProjectModal, setShowSwitchProjectModal] = useState(false);
  const [showModalMySettings, setModalMySettings] = useState(false);
  const [showModalProjectSetup, setModalProjectSetup] = useState(false);
  const [navbarItemSelected, setNavbarItemSelected] = useState("");
  console.log(navbarItemSelected);

  const handleSelect = (eventKey: any) => {
    setNavbarItemSelected(eventKey);
    if (eventKey === "SwitchProject") {
      setShowSwitchProjectModal(true);
    } else if (eventKey === "MySettings") {
      setModalMySettings(true);
    } else if (eventKey === "ProjectSetup") {
      setModalProjectSetup(true);
    }
  };

  const handleClose = () => {
    if (navbarItemSelected === "SwitchProject") {
      setShowSwitchProjectModal(false);
    } else if (navbarItemSelected === "MySettings") {
      setModalMySettings(false);
    } else if (navbarItemSelected === "ProjectSetup") {
      setModalProjectSetup(false);
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
            <NavDropdown.Item eventKey="MySettings">
              My Settings
            </NavDropdown.Item>
            <NavDropdown.Divider />

            <NavDropdown.Item eventKey="PrivacyNotice">
              <Link to="/privacy_notice"> Privacy Notice</Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="SignOff">Sign off</NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>
        </Nav>
      </Navbar>
      <ModalSwitchProject show={showSwitchProjectModal} onHide={handleClose} />
      <ModalMySettings show={showModalMySettings} onHide={handleClose} />
      <ModalProjectSetup show={showModalProjectSetup} onHide={handleClose} />
    </>
  );
};

export default NavBar;
