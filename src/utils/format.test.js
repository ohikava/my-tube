import {formatDate, formatViews} from "./format";

it("format Views should work right", () => {
  expect(formatViews(1000000)).toBe("1 млн");
  expect(formatViews(200000)).toBe("200 тыс");
  expect(formatViews(5000)).toBe("5 тыс");
  expect(formatViews(231)).toBe("231");
});

it("format Date should work right", () => {
  expect(formatDate("01.11.2020")).toBe("1 год");
})
