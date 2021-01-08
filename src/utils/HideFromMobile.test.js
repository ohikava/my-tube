import React from "react";
import {render, unmountComponentAtNode} from "react-dom";
import { act } from "react-dom/test-utils";
import HideFromMobile from "./HideFromMobile";

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

it("it should hide from mobile", () => {
  let mockChildren = <div>Mock me</div>;

  act(() => {
    render(
      <HideFromMobile border={420}>
        {mockChildren}
      </HideFromMobile>,
      container
    )
  });

  expect(document.body.innerHTML).toBe("<div><div>Mock me</div></div>");

  act(() => {
    //Change the viewport to 220
    window = Object.assign(window, { innerWidth: 220 });

    //Trigger the window resize event.
    global.dispatchEvent(new Event('resize'));

  });
  console.log(innerWidth);
  expect(document.body.innerHTML).toBe("<div></div>");
})
