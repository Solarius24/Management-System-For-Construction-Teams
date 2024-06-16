import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../redux/store/store";
import ModalTabSettings from "./ModalTabSettings";
import ModalTabNewTitle from "../ModalTabNewtitle/ModalTabNewTitle";

test("close modal window with OK button", () => {
  const handleClose = jest.fn();
  render(
    <Provider store={store}>
      <ModalTabSettings show={true} onHide={handleClose} tabId="TAB SETTINGS" />
    </Provider>
  );
  const inputElement = screen.getByRole("button", { name: /cancel/i });
  fireEvent.click(inputElement);
  expect(handleClose).toHaveBeenCalledTimes(1);
});
// test("close modal window with CANCEL button", () => {
//   const handleClose = jest.fn();
//   render(
//     <Provider store={store}>
//       <ModalTabNewTitle show={true} onHide={handleClose} tabId="" />
//     </Provider>
//   );

//   const inputElement = screen.getByRole("button", { name: /cancel/i });
//   fireEvent.click(inputElement);
//   expect(handleClose).toHaveBeenCalledTimes(1);
// });

// test("close modal window with SAVE CHANGES button", () => {
//   const handleClose = jest.fn();
//   render(
//     <Provider store={store}>
//       <ModalTabNewTitle show={true} onHide={handleClose} tabId="" />
//     </Provider>
//   );

//   const inputElement = screen.getByRole("button", { name: /save/i });
//   fireEvent.click(inputElement);
//   expect(handleClose).toHaveBeenCalledTimes(1);
// });

test("Display Modal Tab Change Title", () => {
  const handleClose = jest.fn();
  render(
    <Provider store={store}>
      <ModalTabSettings show={true} onHide={handleClose} tabId="TAB SETTINGS" />
    </Provider>
  );
  const tab = screen.getByRole("button", { name: "Default Tab" });
  fireEvent.click(tab);
  const editSelectedButton = screen.getByText(/edit selected/i);
  fireEvent.click(editSelectedButton);
  expect(screen.getByText(/tab name/i)).toBeVisible();
});
