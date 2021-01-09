import React from "react";
import {unmountComponentAtNode, render} from "react-dom";
import {act} from "react-dom/test-utils";
import Notifications from "./Notifications";
import "jest-styled-components";

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("should be visible", () => {
  let visibility = true;
  act(() => {
    render(<Notifications isOpenNotifications={visibility} />, container);
  });
  const notifications = container.querySelector("[data-testid='notifications']");

  expect(notifications).toHaveStyleRule("display", "flex");
});

it("should be hidden", () => {
  let visibility = false;
  act(() => {
    render(<Notifications isOpenNotifications={visibility} />, container);
  });
  const notifications = container.querySelector("[data-testid='notifications']");

  expect(notifications).toHaveStyleRule("display", "none");
});
