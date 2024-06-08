import { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState('');

  const handleButtonClick = (val) => {
    switch (val) {
      case 'AC':
        setValue('');
        break;
      case 'B':
        setValue((prevValue) => prevValue.slice(0, -1));
        break;
      case '=':
        try {
          setValue((prevValue) => eval(prevValue).toString());
        } catch (e) {
          setValue('Error');
        }
        break;
      default:
        setValue((prevValue) => prevValue + val);
    }
  };

  return (
    <div className="App">
      <div>
        Calculator
        <div className='nav-bar'>Use it carefully!</div>
        <div className='calculator-main'>
          <div className='calculator-IO'>
            {value}
          </div>
          <div className='calculator-function'>
            <div className='clear-block'>
              <button onClick={() => handleButtonClick('AC')}> AC </button>
              <button onClick={() => handleButtonClick('B')}> B </button>
              <button onClick={() => handleButtonClick('%')}> % </button>
            </div>
            <div className='numbers'>
              <button onClick={() => handleButtonClick('1')}> 1 </button>
              <button onClick={() => handleButtonClick('2')}> 2 </button>
              <button onClick={() => handleButtonClick('3')}> 3 </button>
              <button onClick={() => handleButtonClick('4')}> 4 </button>
              <button onClick={() => handleButtonClick('5')}> 5 </button>
              <button onClick={() => handleButtonClick('6')}> 6 </button>
              <button onClick={() => handleButtonClick('7')}> 7 </button>
              <button onClick={() => handleButtonClick('8')}> 8 </button>
              <button onClick={() => handleButtonClick('9')}> 9 </button>
            </div>
            <div className='basic-fun'>
              <button onClick={() => handleButtonClick('/')}> ÷ </button>
              <button onClick={() => handleButtonClick('*')}> × </button>
              <button onClick={() => handleButtonClick('-')}> - </button>
              <button onClick={() => handleButtonClick('+')}> + </button>
              <button onClick={() => handleButtonClick('=')}> = </button>
            </div>
            <div className='zero-block'>
              <button className='zero-button' onClick={() => handleButtonClick('0')}> 0 </button>
              <button onClick={() => handleButtonClick('.')}> . </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;