import { useEffect, useState } from "react";
import { Col, Nav, NavDropdown, Row } from "react-bootstrap";
import ModalAddForm from "../components/modals/ModalAddForm";
import formsList from "../configData/formsConfig/formsList";
import formsColumnConfigList from "../configData/formsConfig/formsColumnConfigList";
import FormItemList from "../components/forms/FormItemList";
import { deleteForm, fetchForms } from "../redux/slices/formSlice";
import { useAppDispatch } from "../redux/reduxHooks";
import FormColumnConfig from "../components/forms/FormColumnConfig";
import FormFillters from "../components/forms/FormFillters";

const FormsTab = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [modalAddShow, setModalAddShow] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [showColumnConfig, setShowColumnConfig] = useState(false);
  const [filterData, setFilterData] = useState({});
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchForms());
  }, [dispatch]);

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
  function handleFormDelate() {
    dispatch(deleteForm(selectedItems));
  }

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
              <NavDropdown.Item onClick={handleFormDelate} href="#/action-6">
                DELETE
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
        </Col>
      </Row>

      <Row>
        {showFilter && (
          <Col>
            <FormFillters
              handleClose={handleCloseShowFilter}
              show={showFilter}
              onHide={() => setShowFilter(false)}
              setFilterData={(filterData) => setFilterData(filterData)}
            />
          </Col>
        )}
        {showColumnConfig && (
          <Col className="col-2">
            <FormColumnConfig
              handleClose={handleCloseShowColumnConfig}
              show={showColumnConfig}
              onHide={() => setShowColumnConfig(false)}
              columnConfigList={formsColumnConfigList}
            />
          </Col>
        )}
        <Col className="col">
          <FormItemList
            setSelectedItems={setSelectedItems}
            filter={filterData}
          />
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
