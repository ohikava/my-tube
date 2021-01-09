import React from "react";
import Item from "./Item";
import {unmountComponentAtNode, render} from "react-dom";
import {act} from "react-dom/test-utils";
import Navigation from "./Navigation";

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

it("should show items", () => {
  const data = ["p1", "p2", "p3", "p4"];

  act(() => {
    render(
      <Navigation>
        {
          data.map((i, index) => <li key={index}>{i}</li>)
        }
      </Navigation>, container
    )
  });

  const navigation = container.querySelector("[data-testid='navigation']")
  expect(navigation.innerHTML).toBe("<li>p1</li><li>p2</li><li>p3</li><li>p4</li>");
})
