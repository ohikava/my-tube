// my first component test!!!

import React from "react";
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";

import Burger from "./Burger";

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.append(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});


it("should make click event", () => {

  const click = jest.fn();

  act(() => {
    render(<Burger cb={click} />, container)
  });
  const button = container.querySelector("[data-testid='burger']");

  expect(click).toHaveBeenCalledTimes(0);

  act(() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  expect(click).toHaveBeenCalledTimes(1);

  act(() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true}));
  });
  expect(click).toHaveBeenCalledTimes(2);
});
