import React, { useReducer } from 'react';
import { colors, shuffle } from './randomColors';

const reducer = (state, action) => {
  switch (action.type) {
    case 'toggle':
      return {
        ...state,
        tiles: state.tiles.map(tile => {
          if (tile.id !== action.payload) {
            return tile;
          }

          return {
            ...tile,
            toggle: !tile.toggle,
          }
        })
      }

    case 'equal':
      return {
        ...state,
        tiles: state.tiles.map(tile => {
          if (tile.color !== action.payload[0].color
            && tile.color !== action.payload[1].color) {
            return tile;
          }

          return {
            ...tile,
            completed: !tile.completed,
          }
        })
      }

    case 'noEqual':
      return {
        ...state,
        tiles: state.tiles.map(tile => {
          if (tile.id !== action.payload[0].id
            && tile.id !== action.payload[1].id) {
            return tile;
          }

          return {
            ...tile,
            toggle: false,
          }
        })
      }

    case "addColor":
      return {
        ...state,
        twoChoosenTiles: [
          ...state.twoChoosenTiles,
          action.payload,
        ],
      };

    case "deleteColors":
      return {
        ...state,
        twoChoosenTiles: [],
      };

    case "increase":
      return {
        ...state,
        counter: state.counter + 1,
      };

    default:
      return state;
  }
};

const shuffledTiles = [
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

shuffle(shuffledTiles);

export const initialState = {
  tiles: shuffledTiles,
  twoChoosenTiles: [],
  counter: 0,
};

export const DispatchContext = React.createContext(() => { });
export const StateContext = React.createContext(initialState);

export const StateProvider = ({children}) => {
  const [state, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        {children}
      </StateContext.Provider>
    </DispatchContext.Provider>
  )
};
