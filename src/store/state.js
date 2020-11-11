function getRandomRgb() {
  var num = Math.round(0xffffff * Math.random());
  var r = num >> 16;
  var g = (num >> 8) & 255;
  var b = num & 255;
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

const colors = {
  one: getRandomRgb(),
  two: getRandomRgb(),
  tree: getRandomRgb(),
  four: getRandomRgb(),
  five: getRandomRgb(),
  six: getRandomRgb(),
  seven: getRandomRgb(),
  eight: getRandomRgb(),
};

export const initialState = {
  tiles: [
    { id: 1, color: colors.one, completed: false, toggle: false },
    { id: 2, color: colors.two, completed: false, toggle: false },
    { id: 3, color: colors.tree, completed: false, toggle: false },
    { id: 4, color: colors.four, completed: false, toggle: false },
    { id: 5, color: colors.five, completed: false, toggle: false },
    { id: 6, color: colors.six, completed: false, toggle: false },
    { id: 7, color: colors.seven, completed: false, toggle: false },
    { id: 8, color: colors.eight, completed: false, toggle: false },
    { id: 9, color: colors.one, completed: false, toggle: false },
    { id: 10, color: colors.two, completed: false, toggle: false },
    { id: 11, color: colors.tree, completed: false, toggle: false },
    { id: 12, color: colors.four, completed: false, toggle: false },
    { id: 13, color: colors.five, completed: false, toggle: false },
    { id: 14, color: colors.six, completed: false, toggle: false },
    { id: 15, color: colors.seven, completed: false, toggle: false },
    { id: 16, color: colors.eight, completed: false, toggle: false },
  ],
  twoChoosenTiles: [],
  count: 0,
};
