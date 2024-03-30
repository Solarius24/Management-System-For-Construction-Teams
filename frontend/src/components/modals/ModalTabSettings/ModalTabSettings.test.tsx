import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../redux/store/store";
import Dashboard from "../../../pages/Dashboard/Dashboard";

test("Edit Selected button displays ModalTabNewTitle", () => {
  render(
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );
  const addNewTabButton = screen.getByText(/tab settings/i);
  fireEvent.click(addNewTabButton);
  const editSelectedButton = screen.getByText(/edit selected/i);
  fireEvent.click(editSelectedButton);
  expect(screen.getByTitle("Enter Tab New Title")).toBeVisible();
});
