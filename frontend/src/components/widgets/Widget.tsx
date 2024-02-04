import listOfWidgets from "../../configData/widgetsConfig/listOfWidgets";
import HorizontalBarChart from "./HorizontalBarChart";
import HorizontalStackedBarChart from "./HorizontalStackedBarChart";
import PieChartWithCustomLabels from "./PieChartWithCustomLabels";
import StackedAreaChart from "./StackedAreaChart";
import VerticalBarChart from "./VerticalBarChart";
import VerticalStackedBarChart from "./VerticalStackedBarchart";

const Widget = (props: any) => {
  const name = listOfWidgets.filter((item) => item.name === props.widgetTitle);
  const widgetType = name[0].widgetType;

  switch (widgetType) {
    case "Horizontal Bar Chart":
      return <HorizontalBarChart />;
    case "Horizontal Stacked Bar Chart":
      return <HorizontalStackedBarChart />;
    case "Pie Chart With Custom Labels":
      return <PieChartWithCustomLabels />;
    case "Stacked Area Chart":
      return <StackedAreaChart />;
    case "Vertical Bar Chart":
      return <VerticalBarChart />;
    case "Vertical Stacked Bar Chart":
      return <VerticalStackedBarChart />;
    default:
      return <div>WIDGET NOT FOUND</div>;
  }
};

export default Widget;
