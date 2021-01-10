import React from "react";
import Item from "./Item";
import {unmountComponentAtNode, render} from "react-dom";
import {act} from "react-dom/test-utils";
import NotificationItem from "./NotificationItem";

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

it("it should have children", () => {
  const fakeItem = {
    icon: "user1.jpg",
    body: "Иван сделал новый видос",
    id: 1
  };

  act(() => {
    render(<Item i={fakeItem} />, container);
  });
  const item = container.querySelector("[data-testid='item']");
  const imageChild = container.querySelector("[data-testid='item'] img");
  const bodyChild = container.querySelector("[data-testid='item'] span");

  expect(bodyChild.textContainer).toBe("Иван сделал новый видос");
  expect(imageChild.prop('src')).toBe("user1.jpg");

})
