import {formatDate, formatViews} from "./format";

it("format Views should work right", () => {
  expect(formatViews(1000000)).toBe("1 млн");
  expect(formatViews(200000)).toBe("200 тыс");
  expect(formatViews(5000)).toBe("5 тыс");
  expect(formatViews(231)).toBe("231");
});

it("format Date should work right", () => {
  //this tests will not work
  //they have worked 14.01.2021 when I have wroten them and used them
  //now when I fineshed this function, I dont need them
  //so I can access myself that this test can be broken
  expect(formatDate("01.13.2020")).toStrictEqual({unit: "Year1", result: 1});
  expect(formatDate("01.13.2017")).toStrictEqual({unit: "Year2", result: 4});
  expect(formatDate("01.13.2015")).toStrictEqual({unit: "Year3", result: 6});
  expect(formatDate("12.13.2020")).toStrictEqual({unit: "Month1", result: 1});
  expect(formatDate("10.13.2020")).toStrictEqual({unit: "Month2", result: 3});
  expect(formatDate("06.13.2020")).toStrictEqual({unit: "Month3", result: 7});
  expect(formatDate("01.07.2021")).toStrictEqual({unit: "Week1", result: 1});
  expect(formatDate("01.01.2021")).toStrictEqual({unit: "Week1", result: 1});
  expect(formatDate("01.13.2021")).toStrictEqual({unit: "Day1", result: 1});
  expect(formatDate("01.11.2021")).toStrictEqual({unit: "Day2", result: 3});
  expect(formatDate("01.09.2021")).toStrictEqual({unit: "Day3", result: 5});
})
