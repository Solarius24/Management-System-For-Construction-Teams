import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import { BrowserRouter } from "react-router-dom";
import ProcessDashboard from "./ProcessDashboard";

test("Display ADD LOCATION modal", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <ProcessDashboard />
      </Provider>
    </BrowserRouter>
  );
  const addNewLocation = screen.getByRole("button", { name: /add location/i });
  fireEvent.click(addNewLocation);
  expect(screen.getByText("LOCATION NAME")).toBeVisible();
  const closeBtn = screen.getByRole("button", { name: "Close" });
  fireEvent.click(closeBtn);
  expect(addNewLocation).toBeTruthy();
});
