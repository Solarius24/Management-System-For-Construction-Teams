import React, { useState } from "react";
import { Col, Nav, NavDropdown, Row } from "react-bootstrap";
import formsScheduleList from "../configData/formsConfig/formScheduleList";
import ModalAdd from "../components/modals/ModalAddFormSchedule";
import Fillters from "../components/Fillters";
import taskScheduleFilter from "../configData/tasksConfig/taskScheduleFilter";
import ModalAddFormSchedule from "../components/modals/ModalAddFormSchedule";
import FormScheduleList from "../components/forms/FormScheduleList";

const FormScheduleTab = () => {
  const [modalAddShow, setModalAddShow] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  const handleCloseShowFilter = () => {
    if (!showFilter) {
      setShowFilter(true);
    } else {
      setShowFilter(false);
    }
  };

  return (
    <div>
      <Row>
        <ModalAddFormSchedule
          show={modalAddShow}
          onHide={() => setModalAddShow(false)}
          title={"ADD NEW FORM SCHEDULE"}
          list={formsScheduleList}
        />
        <Col>
          <Nav justify variant="tabs">
            <Nav.Item>
              <Nav.Link onClick={() => setModalAddShow(true)}>
                ADD NEW FORM SCHEDULE
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={handleCloseShowFilter}>FILTERS</Nav.Link>
            </Nav.Item>
            <NavDropdown title="ACTIONS" id="basic-nav-dropdown">
              <NavDropdown.Item href="#/action-6">DELETE</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Col>
      </Row>

      <Row>
        {showFilter && (
          <Col className="col-3">
            <Fillters
              handleClose={handleCloseShowFilter}
              show={showFilter}
              onHide={() => setShowFilter(false)}
              filterData={taskScheduleFilter}
            />
          </Col>
        )}
        <Col>
          <FormScheduleList />
        </Col>
      </Row>
    </div>
  );
};

export default FormScheduleTab;
