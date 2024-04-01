import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../redux/store/store";
import ModalTabNewTitle from "./ModalTabNewTitle";

test("Display add new task modal", () => {
  render(
    <Provider store={store}>
      <ModalTabNewTitle show={true} onHide={jest.fn()} tabId="" />
    </Provider>
  );
  const inputElement = screen.getByPlaceholderText(/type tab name/i);
  fireEvent.change(inputElement, { target: { value: "doc" } });
  expect(inputElement.value).toBe("doc");
});
