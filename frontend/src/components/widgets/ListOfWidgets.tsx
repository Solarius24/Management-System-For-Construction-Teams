import Widget from "./Widget";
import WidgetNew from "./WidgetNew";

function ListOfWidgets(props: any) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr ",
        gap: "10px",
      }}
    >
      {props.widgets.length > 0 &&
        props.widgets.map((item: any) => (
          <WidgetNew
            tabId={props.tabId}
            widgetName={item.widgetName}
            widgetId={item._id}
          />
        ))}
    </div>
  );
}

export default ListOfWidgets;
