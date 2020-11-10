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

console.log(colors);

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

console.log(initialState);

let arrTiles = [];

export const Field = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [tiles, setTiles] = useState(initialState);
  const [twoChoosedTiles, setTwoChoosedTiles] = useState('');

  console.log(twoChoosedTiles);

  const clickHandler = ({ id, color, completed }) => {

    if (!twoChoosedTiles) {
      setTwoChoosedTiles(color);
      arrTiles.push(color);
    }

    if (twoChoosedTiles) {
      arrTiles.push(color);
    }

    if (arrTiles.length === 2) {
      let a = areEqual(arrTiles);

      if (a === true) {
        setTimeout(() => {
          setTiles(
            tiles.map((tile) => {
              if (tile.color === arrTiles[0] && tile.color === arrTiles[1]) {
                tile.completed = !tile.completed;
              }
  
              return tile;
            }),
          );
        }, 1500);
      }
      console.log(a);
    }


    // arrTiles.splice(0, 2);

    // else if (twoChoosedTiles === color) {
    //   setTiles(
    //     tiles.map((tile) => {
    //       if (tile.id === id) {
    //         tile.completed = !tile.completed;
    //       }

    //       return tile;
    //     }),
    //   );
    // }

    // if (twoChoosedTiles !== color) {
    //   setTiles(
    //     tiles.map((tile) => {
    //       if (tile.id === id) {
    //         tile.toggle = !tile.toggle;
    //       }

    //       return tile;
    //     }),
    //   );
    // }

    setTiles(
      tiles.map(tile => {
        if (tile.id === id) {
          tile.toggle = !tile.toggle;
        }

        return tile;
      })
    );

    // setTiles(
    //   tiles.map((tile) => {
    //     if (tile.id === id) {
    //       tile.completed = !tile.completed;
    //     }

    //     return tile;
    //   }),
    // );

    // setIsFlipped(!isFlipped);

    console.log(id);
    console.log(color);
    console.log(completed);
  };

  const areEqual = (arr) => {
    if (arr[0] === arr[1]) {
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
          // className="field__scene"
          key={tile.id}
        >
          <div
            className={CN("field__tile", {
              "is-flipped": tile.toggle,
            })}
            // className="field__tile"
            onClick={() => {
              clickHandler(tile);
              arrTiles.push(tile.color);
              arrTiles.pop();
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
