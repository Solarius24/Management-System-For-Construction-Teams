import { useState } from "react";
import { Col, Nav, NavDropdown, Row } from "react-bootstrap";
import Fillters from "../components/Fillters";
import ColumnConfig from "../components/ColumnConfig";
import tasksFilter from "../configData/tasksConfig/tasksFilter";
import TasksList from "../components/task/TasksList";
import columnConfigList from "../configData/columnConfigList";
import tasksList from "../configData/tasksConfig/tasksList";
import ModalAddTask from "../components/modals/ModalAddTask";
import { deleteTask } from "../redux/slices/taskSlice";
import { useAppDispatch } from "../redux/reduxHooks";

const Tasks = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [modalAddShow, setModalAddShow] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [showColumnConfig, setShowColumnConfig] = useState(false);
  const dispatch = useAppDispatch();
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

  function handleTaskDelate() {
    dispatch(deleteTask(selectedItems));
  }

  return (
    <div className="mt-5">
      <Row>
        {modalAddShow && (
          <ModalAddTask
            title="ADD NEW TASK"
            show={modalAddShow}
            onHide={() => setModalAddShow(false)}
            list={tasksList}
          />
        )}

        <Col>
          <Nav justify variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link onClick={() => setModalAddShow(true)}>
                ADD NEW TASK
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
              <NavDropdown.Item onClick={handleTaskDelate} href="#/action-6">
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
            <Fillters
              handleClose={handleCloseShowFilter}
              show={showFilter}
              onHide={() => setShowFilter(false)}
              filterData={tasksFilter}
            />
          </Col>
        )}

        {showColumnConfig && (
          <Col>
            <ColumnConfig
              handleClose={handleCloseShowColumnConfig}
              show={showColumnConfig}
              onHide={() => setShowColumnConfig(false)}
              columnConfigList={columnConfigList}
            />
          </Col>
        )}
        <Col>
          <TasksList setSelectedItems={setSelectedItems} />
        </Col>
      </Row>
    </div>
  );
};

export default Tasks;
