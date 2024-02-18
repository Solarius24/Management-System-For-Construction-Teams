import { Button, Card } from "react-bootstrap";
import listOfWidgets from "../../configData/widgetsConfig/listOfWidgets";
import HorizontalBarChart from "./graphs/rechartTemp/HorizontalBarChart";
import HorizontalStackedBarChart from "./graphs/rechartTemp/HorizontalStackedBarChart";
import PieChartWithCustomLabels from "./graphs/rechartTemp/PieChartWithCustomLabels";
import StackedAreaChart from "./graphs/rechartTemp/StackedAreaChart";
import VerticalBarChart from "./graphs/rechartTemp/VerticalBarChart";
import VerticalStackedBarChart from "./graphs/rechartTemp/VerticalStackedBarchart";
import { useAppDispatch } from "../../redux/reduxHooks";
import { deleteWidget } from "../../redux/slices/userSlice";

const Widget = (props: any) => {
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

  switch (widgetType) {
    case "Horizontal Bar Chart":
      return (
        <Card>
          <Button onClick={handleWidgetDelete}>DELETE</Button>
          <HorizontalBarChart widgetName={props.widgetName} />
        </Card>
      );

    case "Horizontal Stacked Bar Chart":
      return (
        <Card>
          <Button onClick={handleWidgetDelete}>DELETE</Button>
          <HorizontalStackedBarChart widgetName={props.widgetName} />
        </Card>
      );
    case "Pie Chart With Custom Labels":
      return (
        <Card>
          <Button onClick={handleWidgetDelete}>DELETE</Button>
          <PieChartWithCustomLabels widgetName={props.widgetName} />
        </Card>
      );
    case "Stacked Area Chart":
      return (
        <Card>
          <Button onClick={handleWidgetDelete}>DELETE</Button>
          ) <StackedAreaChart widgetName={props.widgetName} />
        </Card>
      );
    case "Vertical Bar Chart":
      return (
        <Card>
          <Button onClick={handleWidgetDelete}>DELETE</Button>
          <VerticalBarChart widgetName={props.widgetName} />
        </Card>
      );
    case "Vertical Stacked Bar Chart":
      return (
        <Card>
          <Button onClick={handleWidgetDelete}>DELETE</Button>
          <VerticalStackedBarChart widgetName={props.widgetName} />
        </Card>
      );
    default:
      return <div>WIDGET NOT FOUND</div>;
  }
};

export default Widget;
