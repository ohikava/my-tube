import React from 'react';
import {unmountComponent, render} from "react-dom";
import {act} from "react-dom/test-utils";
import "jest-styled-components";
import DropDownMenu from "./DropDownMenu";

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponent(container);
  container.remove();
  container = null;
});

it("DropDownMenu sholud be dropped", () => {
  let open = true;
  let children = <><li>child1</li><li>child2</li><li>child3</li></>;

  act(() => {
    render(<DropDownMenu open={open}>{children}</DropDownMenu>, container);
  });

  const dropDownMenu = container.querySelector("[data-testid='dropdownmenu']");

  expect(dropDownMenu).toHaveStyleRule("display": "flex");
});

it("DropDownMenu sholud be hidden", () => {
  let open = false;
  let children = <><li>child1</li><li>child2</li><li>child3</li></>;

  act(() => {
    render(<DropDownMenu open={open}>{children}</DropDownMenu>, container);
  });

  const dropDownMenu = container.querySelector("[data-testid='dropdownmenu']");

  expect(dropDownMenu).toHaveStyleRule("display": "none");
});
