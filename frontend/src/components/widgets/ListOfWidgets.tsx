import Widget from "./Widget";

function ListOfWidgets(props: any) {
  console.log("nazwa widgeta", props.widgets);
  return (
    <div>
      {props.widgets.map((item: any) => (
        <Widget widgetTitle={item} />
      ))}
    </div>
  );
}

export default ListOfWidgets;
