import './Field.scss';
import { useEffect, useState } from 'react';

export const Field = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [tiles, setTiles] = useState([...Array(16)]);
  // const [tiles, setTiles] = useState([
  //   "red",
  //   "pink",
  //   "green",
  //   "greenLight",
  //   "yellow",
  //   "orange",
  //   "orangeLight",
  //   "blue",
  //   "red",
  //   "pink",
  //   "green",
  //   "greenLight",
  //   "yellow",
  //   "orange",
  //   "orangeLight",
  //   "blue"
  // ]);

  const clickHandler = (el) => {
    // setIsFlipped(!isFlipped);
    if (!el.classList.contains("field__face")) {
      return;
    }

    const tile = el.closest(".field__tile");
    tile.classList.toggle("is-flipped");
  };

  return (
    <div className="field">
      {tiles.map((color, i) => (
        <div
          key={i}
          className={`field__tile ${isFlipped ? "is-flipped" : ""}`}
          // className="field__tile"
          data={color}
          onClick={(event) => {
            clickHandler(event.target);
            // setIsFlipped(!isFlipped);
            console.log(event.target);
          }}
        >
          <div className="field__face field__face--front"></div>
          <div className="field__face field__face--back"></div>
        </div>
      ))}

      {/* <div className="field__tile" datatype="green">
        <div className="field__face field__face--front"></div>
        <div className="field__face field__face--back"></div>
      </div>

      <div className="field__tile" datatype="yellow">
        <div className="field__face field__face--front"></div>
        <div className="field__face field__face--back"></div>
      </div>

      <div className="field__tile" datatype="greenLight">
        <div className="field__face field__face--front"></div>
        <div className="field__face field__face--back"></div>
      </div>

      <div className="field__tile" datatype="orangeLight">
        <div className="field__face field__face--front"></div>
        <div className="field__face field__face--back"></div>
      </div>

      <div className="field__tile" datatype="greenLight">
        <div className="field__face field__face--front"></div>
        <div className="field__face field__face--back"></div>
      </div>

      <div className="field__tile" datatype="yellow">
        <div className="field__face field__face--front"></div>
        <div className="field__face field__face--back"></div>
      </div>

      <div className="field__tile" datatype="orange">
        <div className="field__face field__face--front"></div>
        <div className="field__face field__face--back"></div>
      </div>

      <div className="field__tile" datatype="blue">
        <div className="field__face field__face--front"></div>
        <div className="field__face field__face--back"></div>
      </div>

      <div className="field__tile" datatype="pink">
        <div className="field__face field__face--front"></div>
        <div className="field__face field__face--back"></div>
      </div>

      <div className="field__tile" datatype="orange">
        <div className="field__face field__face--front"></div>
        <div className="field__face field__face--back"></div>
      </div>

      <div className="field__tile" datatype="orangeLight">
        <div className="field__face field__face--front"></div>
        <div className="field__face field__face--back"></div>
      </div>

      <div className="field__tile" datatype="pink">
        <div className="field__face field__face--front"></div>
        <div className="field__face field__face--back"></div>
      </div>

      <div className="field__tile" datatype="blue">
        <div className="field__face field__face--front"></div>
        <div className="field__face field__face--back"></div>
      </div>

      <div className="field__tile" datatype="red">
        <div className="field__face field__face--front"></div>
        <div className="field__face field__face--back"></div>
      </div>

      <div className="field__tile" datatype="green">
        <div className="field__face field__face--front"></div>
        <div className="field__face field__face--back"></div>
      </div> */}
    </div>
  );
};
