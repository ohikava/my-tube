

module.exports = {
  formatViews: (init) => {
    let result;
    if (init >= 1000000) {
      result = init / 1000000;
      result = result + " млн";
    } else if (init >= 1000){
      result = init / 1000;
      result = result + " тыс";
    } else {
      result = init;
    }
    return result;
  },
  formatDate: (init) => {
    let result, compare;
    compare = Date.now() - Date.parse(init);
    compare = compare / 86400000;
    compare = Math.round(compare);
    if (compare >= 365) {
      result = compare / 365;
      result = Math.floor(result);
      result = result + " год"
    } else if (compare >= 28) {
      result = compare / 28;
      result = Math.floor(result);
      result = result + " месяцов"
    } else if (compare >= 7){
      result = compare / 7;
      result = Math.floor(result);
      result = result + " недель"
    } else {
      result = compare;
      result = result + " дней"
    }
    return result;
  }
}
