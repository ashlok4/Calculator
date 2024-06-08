
import './App.css';


function App() {
  return (
    <div className="App">
      <div>
        Calculator
        <div className='nav-bar'>Use it carefully!</div>
        <div className='calculator-main'>
          <div className='calculator-IO'>
            'ijnjbhbihb'
          </div>
          <div className='calculator-function'>
            <div className='clear-block'>
              <button> AC </button>
              <button> +/- </button>
              <button> % </button>
            </div>
            <div className='numbers'>
              <button> 1 </button>
              <button> 2 </button>
              <button> 3 </button>
              <button> 4 </button>
              <button> 5 </button>
              <button> 6 </button>
              <button> 7 </button>
              <button> 8 </button>
              <button> 9 </button>
            </div>
            <div className='basic-fun'>
              <button> ÷ </button>
              <button> × </button>
              <button> - </button>
              <button> + </button>
              <button> = </button>
            </div>
            <div className='zero-block'>
              <button className ='zero-button'> 0 </button>
              <button> . </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
