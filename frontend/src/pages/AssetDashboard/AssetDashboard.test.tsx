import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import AssetsDashboard from "./AssetsDashboard";

test("click on ADD ASSET button and display ADD ASSET MODAL", () => {
  render(
    <Provider store={store}>
      <AssetsDashboard />
    </Provider>
  );
  const addAssetButton = screen.getByRole("button", { name: /add asset/i });
  fireEvent.click(addAssetButton);
  expect(screen.getByText(/add new asset/i)).toBeVisible();
});
