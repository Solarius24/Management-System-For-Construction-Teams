import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../redux/store/store";
import ModalTabNewTitle from "./ModalTabNewTitle";

test("type text into textarea", () => {
  render(
    <Provider store={store}>
      <ModalTabNewTitle show={true} onHide={jest.fn()} tabId="" />
    </Provider>
  );
  const inputElement = screen.getByRole("textbox");
  fireEvent.change(inputElement, { target: { textContent: "doc" } });
  expect(inputElement.textContent).toBe("doc");
});
test("close modal window with CANCEL button", () => {
  const handleClose = jest.fn();
  render(
    <Provider store={store}>
      <ModalTabNewTitle show={true} onHide={handleClose} tabId="" />
    </Provider>
  );

  const inputElement = screen.getByRole("button", { name: /cancel/i });
  fireEvent.click(inputElement);
  expect(handleClose).toHaveBeenCalledTimes(1);
});

test("close modal window with SAVE CHANGES button", () => {
  const handleClose = jest.fn();
  render(
    <Provider store={store}>
      <ModalTabNewTitle show={true} onHide={handleClose} tabId="" />
    </Provider>
  );

  const inputElement = screen.getByRole("button", { name: /save/i });
  fireEvent.click(inputElement);
  expect(handleClose).toHaveBeenCalledTimes(1);
});
test("user should be able to type in input", async () => {
  const handleClose = jest.fn();
  render(
    <Provider store={store}>
      <ModalTabNewTitle show={true} onHide={handleClose} tabId="" />
    </Provider>
  );
  const inputElement = screen.getByLabelText("tab-new-name");
  fireEvent.change(inputElement, { target: { value: "tab001" } });
  expect(inputElement.value).toBe("tab001");
});
