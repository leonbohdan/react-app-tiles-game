import './Field.scss';
import { useEffect, useState, useReducer } from 'react';
import CN from 'classnames';

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

const initialState = [
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
];

let twoChoosedTiles = [];

export const Field = () => {
  const [tiles, setTiles] = useState(initialState);
  const [isFirstTile, setIsFirstTile] = useState('');

  const clickHandler = ({ id, color }) => {
    setTiles(
      tiles.map((tile) => {
        if (tile.id === id) {
          tile.toggle = !tile.toggle;
        }

        return tile;
      }),
    );

    if (!isFirstTile) {
      setIsFirstTile(color);
      twoChoosedTiles.push({ id, color });
    } else {
      twoChoosedTiles.push({ id, color });
    }

    if (twoChoosedTiles.length === 2) {
      let equal = areEqual(twoChoosedTiles);

      if (equal) {
        setTimeout(() => {
          setTiles(
            tiles.map((tile) => {
              if (
                tile.color === twoChoosedTiles[0].color &&
                tile.color === twoChoosedTiles[1].color
              ) {
                tile.completed = !tile.completed;
              }

              return tile;
            }),
          );
        }, 1000);
      } else {
        setTimeout(() => {
          setTiles(
            tiles.map((tile) => {
              if (
                tile.id === twoChoosedTiles[0].id ||
                tile.id === twoChoosedTiles[1].id
              ) {
                tile.toggle = false;
              }

              return tile;
            }),
          );
        }, 900);
      }

      setTimeout(() => {
        twoChoosedTiles.splice(0, 2);
      }, 1001);
    }
  };

  const areEqual = (arr) => {
    if (arr[0].color === arr[1].color) {
      return true;
    }

    return false;
  };

  return (
    <div className="field">
      {tiles.map((tile) => (
        <div
          className={CN("field__scene", {
            "is-completed": tile.completed,
          })}
          key={tile.id}
        >
          <div
            className={CN("field__tile", {
              "is-flipped": tile.toggle,
            })}
            onClick={() => {
              clickHandler(tile);
            }}
          >
            <div className="field__face field__face--front"></div>
            <div
              className="field__face field__face--back"
              style={{ backgroundColor: `${tile.color}` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};
