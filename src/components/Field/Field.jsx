import './Field.scss';
import { useEffect, useContext } from 'react';
import CN from 'classnames';
import { StateContext, DispatchContext } from '../../store/StateContext';
import { areEqual } from '../../store/randomColors';

export const Field = () => {
  const dispatch = useContext(DispatchContext);
  const { tiles, twoChoosenTiles } = useContext(StateContext);

  useEffect(() => {
    if (twoChoosenTiles.length === 2) {
      let equal = areEqual(twoChoosenTiles);

      if (equal) {
        setTimeout(() => {
          dispatch({
            type: 'equal',
            payload: twoChoosenTiles
          });
        }, 1000);

        dispatch({type: 'increase'});
      } else {
        setTimeout(() => {
          dispatch({
            type: 'noEqual',
            payload: twoChoosenTiles
          });
        }, 900);
      }

      setTimeout(() => {
        dispatch({ type: "deleteColors" });
      }, 1001);
    }
  }, [twoChoosenTiles, dispatch]);

  const clickHandler = ({ id, color }) => {
    if (twoChoosenTiles.length === 2) {
      return;
    }

    dispatch({ type: 'toggle', payload: id });

    dispatch({ type: 'addColor', payload: { id, color } });
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
