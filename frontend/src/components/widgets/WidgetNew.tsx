import { Button, Card } from "react-bootstrap";
import listOfWidgets from "../../configData/widgetsConfig/listOfWidgets";
import HorizontalBarChart from "./graphs/HorizontalBarChart";
import HorizontalStackedBarChart from "./graphs/HorizontalStackedBarChart";
import PieChartWithCustomLabels from "./graphs/PieChartWithCustomLabels";
import StackedAreaChart from "./graphs/StackedAreaChart";
import VerticalBarChart from "./graphs/VerticalBarChart";
import VerticalStackedBarChart from "./graphs/VerticalStackedBarchart";
import { useAppDispatch } from "../../redux/reduxHooks";
import { deleteWidget } from "../../redux/slices/userSlice";
import Cyrcle from "./graphs/Cyrcle";
import { useFormStatusData } from "./widgetsInputData/useFormStatusData";
import FormStatus from "./graphs/FormStatus";
import FormsRecentActivity from "./graphs/FormsRecentActivity";

const Widget = (props: any) => {
  const formStatusData = useFormStatusData();
  const dispatch = useAppDispatch();
  const widgetNameFiltered = listOfWidgets.filter(
    (item) => item.name === props.widgetName
  );

  let widgetType = "";

  if (widgetNameFiltered.length > 0) {
    widgetType = widgetNameFiltered[0].widgetType;
  }

  // const widgetType = widgetNameFiltered[0].widgetType;

  function handleWidgetDelete() {
    dispatch(deleteWidget({ tabId: props.tabId, widgetId: props.widgetId }));
  }

  switch (props.widgetName) {
    case "Organizations With Most Tasks":
      return (
        <Card>
          <Button onClick={handleWidgetDelete}>DELETE</Button>
          <HorizontalBarChart widgetName={props.widgetName} />
        </Card>
      );

    case "Location With Most Tasks":
      return (
        <Card>
          <Button onClick={handleWidgetDelete}>DELETE</Button>
          <HorizontalBarChart widgetName={props.widgetName} />
        </Card>
      );
    case "Overdue Task Count":
      return (
        <Card>
          <Button onClick={handleWidgetDelete}>DELETE</Button>
          <PieChartWithCustomLabels widgetName={props.widgetName} />
        </Card>
      );
    case "Recent Task Activity":
      return (
        <Card>
          <Button onClick={handleWidgetDelete}>DELETE</Button>
          ) <Cyrcle widgetName={props.widgetName} />
        </Card>
      );
    case "Task Grouped By Organization Type":
      return (
        <Card>
          <Button onClick={handleWidgetDelete}>DELETE</Button>
          <VerticalBarChart widgetName={props.widgetName} />
        </Card>
      );
    case "Task Grouped By Task Type":
      return (
        <Card>
          <Button onClick={handleWidgetDelete}>DELETE</Button>
          <VerticalStackedBarChart widgetName={props.widgetName} />
        </Card>
      );
    case "Form Detail Status":
      return (
        <Card>
          <Button onClick={handleWidgetDelete}>DELETE</Button>
          <PieChartWithCustomLabels
            data={formStatusData}
            widgetName={props.widgetName}
          />
        </Card>
      );
    case "Form Status":
      return (
        <Card>
          <Button onClick={handleWidgetDelete}>DELETE</Button>
          <FormStatus />
        </Card>
      );
    case "Forms Recent Activity":
      return (
        <Card>
          <Button onClick={handleWidgetDelete}>DELETE</Button>
          <FormsRecentActivity />
        </Card>
      );
    default:
      return <div>WIDGET NOT FOUND</div>;
  }
};

export default Widget;
