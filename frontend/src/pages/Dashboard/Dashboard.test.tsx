import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import Dashboard from "./Dashboard";

test("check if Add Widget button displays AddWidgetModal", () => {
  render(
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );
  const linkElement = screen.getByText(/add widget/i);
  expect(linkElement).toBeTruthy();
  fireEvent.click(linkElement);
  expect(screen.getByTitle("ADD WIDGET")).toBeVisible();
});
test("Click on the ADD NEW TAB button to check if the ModalAddTab will be displayed", () => {
  render(
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );
  const addTabSettingsButton = screen.getByText(/add new tab/i);
  fireEvent.click(addTabSettingsButton);
  expect(screen.getByTitle("ADD TAB")).toBeVisible();
});
test("Click on the ADD NEW TAB button to check if the ModalTabSettings will be displayed", () => {
  render(
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );
  const addNewTabButton = screen.getByText(/tab settings/i);
  fireEvent.click(addNewTabButton);
  expect(screen.getByTitle("TAB SETTINGS")).toBeVisible();
});
