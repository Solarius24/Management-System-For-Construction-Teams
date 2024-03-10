import { Button, Card } from "react-bootstrap";
import HorizontalBarChart from "./graphs/rechartTemp/HorizontalBarChart";
import PieChartWithCustomLabels from "./graphs/rechartTemp/PieChartWithCustomLabels";
import VerticalBarChart from "./graphs/rechartTemp/VerticalBarChart";
import VerticalStackedBarChart from "./graphs/rechartTemp/VerticalStackedBarchart";
import { useAppDispatch } from "../../redux/reduxHooks";
import { deleteWidget } from "../../redux/slices/userSlice";
import { useFormStatusData } from "./widgetsInputData/useFormStatusData";
import FormStatus from "./graphs/forms/FormStatus";
import FormsRecentActivity from "./graphs/forms/FormsRecentActivity";
import LocationsWithMostTasks from "./graphs/tasks/LocationsWithMostTasks";
import RecentTaskActivity from "./graphs/tasks/RecentTaskActivity";
import FormsStatusByMonth from "./graphs/forms/FormsStatusByMonth";
import OrganizationsWithMostTasks from "./graphs/tasks/OrganizationsWithMostTasks";

const Widget = (props: any) => {
  const formStatusData = useFormStatusData();
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

    case "Overdue Task Count":
      return (
        <Card>
          <div className="d-flex justify-content-end">
            <Button style={{ width: "50px" }} onClick={handleWidgetDelete}>
              X
            </Button>
          </div>
          <PieChartWithCustomLabels widgetName={props.widgetName} />
        </Card>
      );

    case "Task Grouped By Organization Type":
      return (
        <Card>
          <Button onClick={handleWidgetDelete}>X</Button>{" "}
          <div className="d-flex justify-content-end">
            <Button style={{ width: "50px" }} onClick={handleWidgetDelete}>
              X
            </Button>
          </div>{" "}
          <VerticalBarChart widgetName={props.widgetName} />
        </Card>
      );
    case "Task Grouped By Task Type":
      return (
        <Card>
          <div className="d-flex justify-content-end">
            <Button style={{ width: "50px" }} onClick={handleWidgetDelete}>
              X
            </Button>
          </div>
          <VerticalStackedBarChart widgetName={props.widgetName} />
        </Card>
      );
    case "Form Detail Status":
      return (
        <Card>
          <div className="d-flex justify-content-end">
            <Button style={{ width: "50px" }} onClick={handleWidgetDelete}>
              X
            </Button>
          </div>
          <PieChartWithCustomLabels
            data={formStatusData}
            widgetName={props.widgetName}
          />
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
    default:
      return <div>WIDGET NOT FOUND</div>;
  }
};

export default Widget;
