import { Button, Card, CardGroup } from "react-bootstrap";
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
        <CardGroup className="mt-2 p-2 d-flex flex-column border border-info rounded-4">
          <div className="d-flex justify-content-end">
            <Button style={{ width: "50px" }} onClick={handleWidgetDelete}>
              X
            </Button>
          </div>
          <OrganizationsWithMostTasks />
        </CardGroup>
      );

    case "Location With Most Tasks":
      return (
        <CardGroup className="mt-2 p-2 d-flex flex-column border border-info rounded-4">
          <div className="d-flex justify-content-end">
            <Button style={{ width: "50px" }} onClick={handleWidgetDelete}>
              X
            </Button>
          </div>
          <LocationsWithMostTasks />
        </CardGroup>
      );

    case "Recent Task Activity":
      return (
        <CardGroup className="mt-2 p-2 d-flex flex-column border border-info rounded-4">
          <div className="d-flex justify-content-end">
            <Button style={{ width: "50px" }} onClick={handleWidgetDelete}>
              X
            </Button>
          </div>
          <RecentTaskActivity />
        </CardGroup>
      );

    case "Forms Recent Activity":
      return (
        <CardGroup className="mt-2 p-2 d-flex flex-column border border-info rounded-4">
          <div className="d-flex justify-content-end">
            <Button style={{ width: "50px" }} onClick={handleWidgetDelete}>
              X
            </Button>
          </div>{" "}
          <FormsRecentActivity />
        </CardGroup>
      );
    case "Form Status":
      return (
        <CardGroup className="mt-2 p-2 d-flex flex-column border border-info rounded-4">
          <div className="d-flex justify-content-end">
            <Button style={{ width: "50px" }} onClick={handleWidgetDelete}>
              X
            </Button>
          </div>
          <FormStatus />
        </CardGroup>
      );

    case "Forms Status By Month":
      return (
        <CardGroup className="mt-2 p-2 d-flex flex-column border border-info rounded-4">
          <div className="d-flex justify-content-end">
            <Button style={{ width: "50px" }} onClick={handleWidgetDelete}>
              X
            </Button>
          </div>

          <FormsStatusByMonth />
        </CardGroup>
      );

    case "Process Percentage Complete":
      return (
        <CardGroup className="mt-2 p-2 d-flex flex-column border border-info rounded-4">
          <div className="d-flex justify-content-end">
            <Button style={{ width: "50px" }} onClick={handleWidgetDelete}>
              X
            </Button>
          </div>

          <ProcessPercentageCompleted />
        </CardGroup>
      );
    default:
      return <div>WIDGET NOT FOUND</div>;
  }
};

export default Widget;
