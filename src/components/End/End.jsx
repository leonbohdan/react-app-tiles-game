import './End.scss';
import { headingColor } from '../../store/randomColors';

export const End = () => {
  return (
    <>
      <h2 className="End__heading"
        style={{ color: `${headingColor}` }}
      >
        The End
      </h2>

      <h2 className="End__heading"
        style={{ color: `${headingColor}` }}
      >
        Restart page to start the game from the beginning
      </h2>
    </>
  );
}
