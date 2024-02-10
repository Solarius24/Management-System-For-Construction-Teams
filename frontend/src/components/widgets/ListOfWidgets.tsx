import Widget from "./Widget";

function ListOfWidgets(props: any) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr ",
        gap: "10px",
      }}
    >
      {props.widget &&
        props.widgets.map((item: any) => <Widget widgetTitle={item} />)}
    </div>
  );
}

export default ListOfWidgets;
