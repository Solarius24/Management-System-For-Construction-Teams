import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import FormsTab from "./FormsTab";
import { BrowserRouter } from "react-router-dom";

test("Display ADD FORM modal", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <FormsTab />
      </Provider>
    </BrowserRouter>
  );
  const addNewFormTab = screen.getByRole("button", { name: /add new form/i });
  fireEvent.click(addNewFormTab);
  expect(screen.getByText("ADD FORM")).toBeVisible();
  const closeBtn = screen.getByRole("button", { name: /Close/i });
  fireEvent.click(closeBtn);
  expect(addNewFormTab).toBeTruthy();
});

test("Display filters window", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <FormsTab />
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
        <FormsTab />
      </Provider>
    </BrowserRouter>
  );
  const filtersBtn = screen.getByRole("button", { name: "ADD/REMOVE COLUMN" });
  fireEvent.click(filtersBtn);
  expect(screen.getByText(/column configuration/i)).toBeVisible();
});
