import React from "react";
import {unmountComponentAtNode, render} from "react-dom";
import {act} from "react-dom/test-utils";
import Item from "./Item";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.append(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("it should has an image", () => {
  const fakeitem = {
    body: "fake body",
    id: 0,
    img: "fakeimg.svg"
  };

  act(() => {
    render(<Item id={fakeitem.id} img={fakeitem.img}>{fakeitem.body}</Item>, container
    )
  });


})
