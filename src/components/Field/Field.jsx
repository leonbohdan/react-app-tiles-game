import './Field.scss';
import { useEffect, useState, useReducer, useContext } from 'react';
import CN from 'classnames';
import { initialState } from '../../store/state';
import { StateContext, DispatchContext } from '../../store/StateContext';

// console.log(initialState);

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'color':
//       return {
//         ...state,
//         isFirstTile: action.payload,
//       }
    
//     case 'increase':
//       return {
//         ...state,
//         count: state.count + 1,
//       }
    
//     case 'toggle':
//       return {
//         ...state,
//         tiles: state.tiles.map(tile => {
//           if (tile.id === action.payload) {
//             tile.toggle = !tile.toggle;
//           }

//           return tile;
//         }),
//       }
    
    // case 'toggle':
    //   return {
    //     ...state,
    //     tiles: [
    //       ...state.tiles,
    //       state.tiles.map(tile => {
    //         if (tile.id === action.payload) {
              
    //         }
    //       })
    //     ]
    //   }

//     default:
//       return 1;
//   }
// }

export const Field = () => {
  const dispatch = useContext(DispatchContext);
  const { count } = useContext(StateContext);

  const [tiles, setTiles] = useState(initialState.tiles);
  // const [count, setCount] = useState(initialState.count);
  // const [{ count }, dispatch] = useReducer(
  //   reducer,
  //   initialState
  // );
  // const [{ tiles, twoChoosenTiles, isFirstTile }, dispatch] = useReducer(
  //   reducer,
  //   initialState
  // );

  // console.log(tiles, twoChoosenTiles, isFirstTile);

  console.log(count);

  const clickHandler = ({ id, color }) => {
    setTiles(
      tiles.map((tile) => {
        if (tile.id === id) {
          tile.toggle = !tile.toggle;
        }

        return tile;
      }),
    );

    // initialState.twoChoosenTiles.push({ id, color });

    // dispatch({ type: 'toggle', payload: id });

    if (initialState.twoChoosenTiles.length < 3) {
      // dispatch({ type: 'color', payload: color });
      initialState.twoChoosenTiles.push({ id, color });
    } else {
      return;
      // initialState.twoChoosenTiles.push({ id, color });
    }

    if (initialState.twoChoosenTiles.length === 2) {
      let equal = areEqual(initialState.twoChoosenTiles);

      if (equal) {
        setTimeout(() => {
          setTiles(
            tiles.map((tile) => {
              if (
                tile.color === initialState.twoChoosenTiles[0].color &&
                tile.color === initialState.twoChoosenTiles[1].color
              ) {
                tile.completed = !tile.completed;
              }

              return tile;
            }),
          );
        }, 1000);

        dispatch({type: 'increase'});
      } else {
        setTimeout(() => {
          setTiles(
            tiles.map((tile) => {
              if (
                tile.id === initialState.twoChoosenTiles[0].id ||
                tile.id === initialState.twoChoosenTiles[1].id
              ) {
                tile.toggle = false;
              }

              return tile;
            }),
          );
        }, 900);
      }

      setTimeout(() => {
        initialState.twoChoosenTiles.splice(0, 2);
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
