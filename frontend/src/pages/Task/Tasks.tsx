import { useEffect, useState } from "react";
import { Col, Nav, NavDropdown, Row } from "react-bootstrap";
import TasksList from "../../components/task/TasksItemList";
import tasksList from "../../components/task/tasksConfig/tasksList";
import ModalAddTask from "../../components/modals/ModalAddTask";
import { deleteTask, fetchTasks } from "../../redux/slices/taskSlice";
import { useAppDispatch } from "../../redux/reduxHooks";
import TaskColumnConfig from "../../components/task/TaskColumnConfig";
import TaskFillters from "../../components/task/TaskFillters";

const Tasks = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [modalAddShow, setModalAddShow] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [showColumnConfig, setShowColumnConfig] = useState(false);
  const [filterData, setFilterData] = useState({});
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
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

  function handleTaskDelate() {
    dispatch(deleteTask(selectedItems));
  }

  return (
    <div className="mt-5">
      <Row>
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
            <TaskFillters
              handleClose={handleCloseShowFilter}
              show={showFilter}
              onHide={() => setShowFilter(false)}
              setFilterData={(filterData) => setFilterData(filterData)}
            />
          </Col>
        )}
        {showColumnConfig && (
          <Col className="col-2">
            <TaskColumnConfig
              handleClose={handleCloseShowColumnConfig}
              show={showColumnConfig}
              onHide={() => setShowColumnConfig(false)}
            />
          </Col>
        )}
        <Col className="col">
          <TasksList setSelectedItems={setSelectedItems} filter={filterData} />
        </Col>
      </Row>
      {modalAddShow && (
        <ModalAddTask
          title="ADD TASK"
          show={modalAddShow}
          onHide={() => setModalAddShow(false)}
          list={tasksList}
        />
      )}
    </div>
  );
};

export default Tasks;
