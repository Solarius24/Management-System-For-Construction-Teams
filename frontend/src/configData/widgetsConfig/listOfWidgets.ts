import widget01 from "../../components/widgets/images/widget01.jpg";
import widget03 from "../../components/widgets/images/widget03.jpg";
import widget04 from "../../components/widgets/images/widget04.jpg";
import widget05 from "../../components/widgets/images/widget05.jpg";
import widget06 from "../../components/widgets/images/widget06.jpg";
import widget07 from "../../components/widgets/images/widget07.jpg";
import widget08 from "../../components/widgets/images/widget08.jpg";

const listOfWidgets = [
  {
    type: "task",
    name: "Organizations With Most Tasks",
    image: widget06,
    widgetType: "Horizontal Bar Chart",
  },
  {
    type: "task",
    name: "Location With Most Tasks",
    image: widget06,
    widgetType: "Horizontal Bar Chart",
  },
  {
    type: "task",
    name: "Overdue Task Count",
    image: widget03,
    widgetType: "Pie Chart With Custom Labels",
  },
  {
    type: "task",
    name: "Recent Task Activity",
    image: widget01,
    widgetType: "Cyrcle",
  },
  {
    type: "task",
    name: "Task Type Overview",
    image: widget08,
    widgetType: "Horizontal Stacked Bar Chart",
  },
  {
    type: "task",
    name: "Task Grouped By Organization Type",
    image: widget07,
    widgetType: "Vertical Bar Chart",
  },
  {
    type: "task",
    name: "Task Grouped By Task Type",
    image: widget04,
    widgetType: "Vertical Stacked Bar Chart",
  },
  {
    type: "task",
    name: "Task S Curve",
    image: widget05,
    widgetType: "Stacked Area Chart",
  },

  // {
  //   type: "form",
  //   name: "Expired Forms",
  //   image: widget01,
  //   widgetType: "Cyrcle",
  // },
  // {
  //   type: "form",
  //   name: "Form Breakdown",
  //   image: widget03,
  //   widgetType: "Pie Chart With Custom Labels",
  // },

  {
    type: "form",
    name: "Form Detail Status",
    image: widget03,
    widgetType: "Pie Chart With Custom Labels",
  },
  // {
  //   type: "form",
  //   name: "Form KPI",
  //   image: widget01,
  //   widgetType: "Cyrcle",
  // },
  {
    type: "form",
    name: "Form S Curve",
    image: widget05,
    widgetType: "Stacked Area Chart",
  },
  // {
  //   type: "form",
  //   name: "Forms Issued By Month",
  //   image: widget04,
  //   widgetType: "Vertical Stacked Bar Chart",
  // },
  {
    type: "form",
    name: "Forms Recent Activity",
    image: widget01,
    widgetType: "Cyrcle",
  },
  {
    type: "form",
    name: "Form Status",
    image: widget04,
    widgetType: "Vertical Stacked Bar Chart",
  },
  {
    type: "form",
    name: "Forms Status By Month",
    image: widget04,
    widgetType: "Vertical Stacked Bar Chart",
  },

  {
    type: "processe",
    name: "Process Percentage Complete",
    image: widget07,
    widgetType: "Vertical Bar Chart",
  },
];
export default listOfWidgets;
