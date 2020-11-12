function getRandomRgb() {
  var num = Math.round(0xffffff * Math.random());
  var r = num >> 16;
  var g = (num >> 8) & 255;
  var b = num & 255;
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

export const areEqual = (arr) => {
  return arr[0].color === arr[1].color;
};

export const headingColor = getRandomRgb();

export const colors = {
  one: getRandomRgb(),
  two: getRandomRgb(),
  tree: getRandomRgb(),
  four: getRandomRgb(),
  five: getRandomRgb(),
  six: getRandomRgb(),
  seven: getRandomRgb(),
  eight: getRandomRgb(),
};
