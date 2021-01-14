

module.exports = {
  formatViews: (init) => {
    let result, unit;
    if (init >= 1000000) {
      result = init / 1000000;
      result = result.toFixed(1);
      result = result + "";
      unit = "Million";
    } else if (init >= 1000){
      result = init / 1000;
      result = result.toFixed(1);
      result = result + "";
      unit = "Thousand";
    } else {
      result = init;
      result = result + "";
      unit = null;
    }
    return {result, unit};
  },
  formatDate: (init) => {
    let result, unit, compare;
    compare = Date.now() - Date.parse(init);
    compare = compare / 86400000;
    compare = Math.round(compare);
    if (compare >= 365) {
      result = compare / 365;
      result = Math.floor(result);
      unit = result === 1 ? "Year1" : (result < 5) ? "Year2" : "Year3"
    } else if (compare >= 28) {
      result = compare / 28;
      result = Math.floor(result);
      unit = result === 1 ? "Month1" : (result < 5) ? "Month2" : "Month3"
    } else if (compare >= 7){
      result = compare / 7;
      result = Math.floor(result);
      unit = result === 1 ? "Week1" : "Week2";
    } else {
      result = compare;
      unit = result === 1 ? "Day1" : (result < 5) ? "Day2" : "Day3"
    }
    return {result, unit};
  }
}
