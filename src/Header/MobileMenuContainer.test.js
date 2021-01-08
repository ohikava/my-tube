import React from "react";
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";
import MobileMenuContainer from "./MobileMenuContainer";
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

test("it should be hidden", () => {
  const isOpen = false;
  act(() => {
    render(<MobileMenuContainer isOpen={isOpen}/>, container)
  });
  let mobileMenuContainer = container.querySelector("[data-testid='mobilemenucontainer']");
  expect(mobileMenuContainer).toHaveStyleRule('left', '-100%');
});

test("it should be opened", () => {
  const isOpen = true;
  act(() => {
    render(<MobileMenuContainer isOpen={isOpen}/>, container)
  });
  let mobileMenuContainer = container.querySelector("[data-testid='mobilemenucontainer']");
  expect(mobileMenuContainer).toHaveStyleRule('left', '0');
})
