import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import Dashboard from "./Dashboard";

test("Display Add Widget Modal", () => {
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
test("Display Modal Add Tab", () => {
  render(
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );
  const addTabSettingsButton = screen.getByText(/add new tab/i);
  fireEvent.click(addTabSettingsButton);
  expect(screen.getByTitle("ADD TAB")).toBeVisible();
});
test("Display Modal Tab Settings", () => {
  render(
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );
  const addNewTabButton = screen.getByText(/tab settings/i);
  fireEvent.click(addNewTabButton);
  expect(screen.getByTitle("TAB SETTINGS")).toBeVisible();
});
test("user should be able to type in input", async () => {
  render(
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );
  const addNewTabButton = screen.getByText(/add new tab/i);
  fireEvent.click(addNewTabButton);
  const inputElement = screen.getByLabelText("tab-name");
  fireEvent.change(inputElement, { target: { value: "tab001" } });
  expect(inputElement.value).toBe("tab001");
});
