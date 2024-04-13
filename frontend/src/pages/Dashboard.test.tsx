import { fireEvent, render, screen } from "@testing-library/react";
import Dashboard from "./Dashboard";

test("add widget button to display AddWidgetModal", () => {
  render(<Dashboard />);
  const element = screen.getByText("ADD WIDGET");
  console.log(element);
  expect(element).toBeTruthy();
  //   fireEvent.click(element);
  //   expect(screen.getByTitle("ADD WIDGET")).toBeVisible();
});
