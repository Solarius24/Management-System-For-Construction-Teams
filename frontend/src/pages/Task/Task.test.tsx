import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import Task from "./Tasks";
import { BrowserRouter } from "react-router-dom";

test("Display add new task modal", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Task />
      </Provider>
    </BrowserRouter>
  );
  const addNewFormTab = screen.getByRole("button", { name: /add new task/i });
  fireEvent.click(addNewFormTab);
  expect(screen.getByText("ADD TASK")).toBeVisible();
  const closeBtn = screen.getByRole("button", { name: /close tab/i });
  fireEvent.click(closeBtn);
  expect(addNewFormTab).toBeTruthy();
});

test("Display filters window", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Task />
      </Provider>
    </BrowserRouter>
  );
  const filtersBtn = screen.getByRole("button", { name: /filters/i });
  fireEvent.click(filtersBtn);
  expect(screen.getByText(/search/i)).toBeVisible();
});

test("Display column config window", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Task />
      </Provider>
    </BrowserRouter>
  );
  const filtersBtn = screen.getByRole("button", { name: "ADD/REMOVE COLUMN" });
  fireEvent.click(filtersBtn);
  expect(screen.getByText(/column configuration/i)).toBeVisible();
});
