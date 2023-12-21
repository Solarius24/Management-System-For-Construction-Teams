import { useState } from "react";
import { Col, Nav, NavDropdown, Row } from "react-bootstrap";
import Fillters from "../components/Fillters";
import ColumnConfig from "../components/ColumnConfig";
import tasksFilter from "../configData/tasksConfig/tasksFilter";
import TasksList from "../components/task/TasksList";
import tasksActionList from "../configData/tasksConfig/tasksActionList";
import columnConfigList from "../configData/columnConfigList";
import tasksList from "../configData/tasksConfig/tasksList";
import ModalAddTask from "../components/modals/ModalAddTask";

const Tasks = () => {
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
    <div className="mt-5">
      <Row>
        {showFilter && (
          <Col className="col-3">
            <Fillters
              handleClose={handleCloseShowFilter}
              show={showFilter}
              onHide={() => setShowFilter(false)}
              filterData={tasksFilter}
            />
          </Col>
        )}

        {showColumnConfig && (
          <Col className="col-3">
            <ColumnConfig
              handleClose={handleCloseShowColumnConfig}
              show={showColumnConfig}
              onHide={() => setShowColumnConfig(false)}
              columnConfigList={columnConfigList}
            />
          </Col>
        )}
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
              {tasksActionList.map((item) => {
                return (
                  <>
                    <NavDropdown.Item href={item.id} key={item.id}>
                      {item.name}
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                  </>
                );
              })}
            </NavDropdown>
          </Nav>
        </Col>
      </Row>
      <TasksList />
    </div>
  );
};

export default Tasks;
