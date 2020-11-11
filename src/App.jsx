import './App.scss';
import { useEffect, useContext } from 'react';
import { Field } from './components/Field/Field';
import { End } from './components/End/End';
import { StateContext } from './store/StateContext';

function App() {
  const { count } = useContext(StateContext);

  console.log(count);
  return (
    <div className="App">
      {count === 8 ? (
        <End />
      ) : (
        <>
          <h2 className="App__heading">Choose the same tiles</h2>
          <Field />
        </>
      )}
    </div>
  );
}

export default App;
