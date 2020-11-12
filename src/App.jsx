import './App.scss';
import { useContext } from 'react';
import { Field } from './components/Field/Field';
import { End } from './components/End/End';
import { StateContext } from './store/StateContext';
import { headingColor } from './store/randomColors';

function App() {
  const { counter } = useContext(StateContext);

  return (
    <div className="App">
      {counter === 8 ? (
        <End />
      ) : (
        <>
          <h2
            className="App__heading"
            style={{ color: `${headingColor}` }}
          >
            Find Every Same Colour Cells
          </h2>
          <Field />
        </>
      )}
    </div>
  );
}

export default App;
