import { Button, Card } from "react-bootstrap";
import { useAppDispatch } from "../../redux/reduxHooks";
import { deleteWidget } from "../../redux/slices/userSlice";
import FormStatus from "./graphs/forms/FormStatus";
import FormsRecentActivity from "./graphs/forms/FormsRecentActivity";
import LocationsWithMostTasks from "./graphs/tasks/LocationsWithMostTasks";
import RecentTaskActivity from "./graphs/tasks/RecentTaskActivity";
import FormsStatusByMonth from "./graphs/forms/FormsStatusByMonth";
import OrganizationsWithMostTasks from "./graphs/tasks/OrganizationsWithMostTasks";
import ProcessPercentageCompleted from "./graphs/processes/ProcessPercentageCompleted";

const Widget = (props: any) => {
  const dispatch = useAppDispatch();

  function handleWidgetDelete() {
    dispatch(deleteWidget({ tabId: props.tabId, widgetId: props.widgetId }));
  }

  switch (props.widgetName) {
    case "Organizations With Most Tasks":
      return (
        <Card>
          <div className="d-flex justify-content-end">
            <Button style={{ width: "50px" }} onClick={handleWidgetDelete}>
              X
            </Button>
          </div>
          <OrganizationsWithMostTasks />
        </Card>
      );

    case "Location With Most Tasks":
      return (
        <Card>
          <div className="d-flex justify-content-end">
            <Button style={{ width: "50px" }} onClick={handleWidgetDelete}>
              X
            </Button>
          </div>
          <LocationsWithMostTasks />
        </Card>
      );

    case "Recent Task Activity":
      return (
        <Card>
          <div className="d-flex justify-content-end">
            <Button style={{ width: "50px" }} onClick={handleWidgetDelete}>
              X
            </Button>
          </div>
          <RecentTaskActivity />
        </Card>
      );

    case "Forms Recent Activity":
      return (
        <Card>
          <div className="d-flex justify-content-end">
            <Button style={{ width: "50px" }} onClick={handleWidgetDelete}>
              X
            </Button>
          </div>{" "}
          <FormsRecentActivity />
        </Card>
      );
    case "Form Status":
      return (
        <Card>
          <div className="d-flex justify-content-end">
            <Button style={{ width: "50px" }} onClick={handleWidgetDelete}>
              X
            </Button>
          </div>
          <FormStatus />
        </Card>
      );

    case "Forms Status By Month":
      return (
        <Card>
          <div className="d-flex justify-content-end">
            <Button style={{ width: "50px" }} onClick={handleWidgetDelete}>
              X
            </Button>
          </div>

          <FormsStatusByMonth />
        </Card>
      );

    case "Process Percentage Complete":
      return (
        <Card>
          <div className="d-flex justify-content-end">
            <Button style={{ width: "50px" }} onClick={handleWidgetDelete}>
              X
            </Button>
          </div>

          <ProcessPercentageCompleted />
        </Card>
      );
    default:
      return <div>WIDGET NOT FOUND</div>;
  }
};

export default Widget;
