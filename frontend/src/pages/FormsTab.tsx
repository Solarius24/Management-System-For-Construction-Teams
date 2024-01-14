import { useState } from "react";
import { Col, Nav, NavDropdown, Row } from "react-bootstrap";
import Fillters from "../components/Fillters";
import ColumnConfig from "../components/ColumnConfig";
import ModalAddForm from "../components/modals/ModalAddForm";
import formFilters from "../configData/formsConfig/formsFilter";
import formsList from "../configData/formsConfig/formsList";
import formsColumnConfigList from "../configData/formsConfig/formsColumnConfigList";
import FormItemList from "../components/forms/FormItemList";

const FormsTab = () => {
  const [modalAddShow, setModalAddShow] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [showColumnConfig, setShowColumnConfig] = useState(false);
  const handleCloseShowFilter = () => {
    if (!showFilter) {
      setShowColumnConfig(false);
      setShowFilter(true);
    } else {
      setShowFilter(false);
    }
  };

  const handleCloseShowColumnConfig = () => {
    if (!showColumnConfig) {
      setShowFilter(false);
      setShowColumnConfig(true);
    } else {
      setShowColumnConfig(false);
    }
  };

  return (
    <div>
      <Row>
        <Col>
          <Nav justify variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link onClick={() => setModalAddShow(true)}>
                ADD NEW FORM
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={handleCloseShowFilter} eventKey="link-1">
                FILTERS
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={handleCloseShowColumnConfig} eventKey="link-2">
                ADD/REMOVE COLUMN
              </Nav.Link>
            </Nav.Item>
            <NavDropdown title="ACTIONS" id="basic-nav-dropdown">
              <NavDropdown.Item>CHAGE STATUS</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#/action-2">
                DISTRIBUTE FROM
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#/action-3">
                FORMS REPORTS
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#/action-4">
                EXPORT AS CSV
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#/action-5">
                BULK EXPORT PDF
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#/action-6">DELETE</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
        </Col>
      </Row>

      <Row>
        {showFilter && (
          <Col>
            <Fillters
              handleClose={handleCloseShowFilter}
              show={showFilter}
              onHide={() => setShowFilter(false)}
              filterData={formFilters}
            />
          </Col>
        )}
        {showColumnConfig && (
          <Col>
            <ColumnConfig
              handleClose={handleCloseShowColumnConfig}
              show={showColumnConfig}
              onHide={() => setShowColumnConfig(false)}
              columnConfigList={formsColumnConfigList}
            />
          </Col>
        )}
        <Col>
          <FormItemList />
        </Col>
      </Row>
      <ModalAddForm
        show={modalAddShow}
        onHide={() => setModalAddShow(false)}
        title={"ADD NEW FORM"}
        list={formsList}
      />
    </div>
  );
};

export default FormsTab;
