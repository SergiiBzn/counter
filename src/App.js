import { useState } from 'react';
import './index.css';

function App() {
  const [counter, setCounter] = useState(0);

  const onClickMinus = () => {
    setCounter((counter) => counter - 1);
  };

  const onClickPlus = () => {
    setCounter((counter) => counter + 1);
  };

  return (
    <div className='App'>
      <div>
        <h2>Счетчик:</h2>
        <h1>{counter}</h1>
        <button onClick={onClickMinus}>- Минус</button>
        <button onClick={onClickPlus}>Плюс +</button>
      </div>
    </div>
  );
}

export default App;
