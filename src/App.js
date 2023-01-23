import React, { useState } from "react";
import './App.css';

function App() {
  const [ result, setResult ] = useState('');
  const pushBtn = (event) => {
    setResult(result.concat(event.target.value))
  }
  const C = () => {
    setResult("");
  }
  const equal = () => {
    setResult(eval(result).toString());
  }

  return (
    <div className="App" name="container">
        <table className='table' name="table">
          <tr>
            <td colSpan='4'><input type="text" className="text" id='text' disabled value={result}/></td>
          </tr>
          <tr>
            <td><input type="button" className='btn' name='seven' value='7' onClick={pushBtn}/></td>
            <td><input type="button" className='btn' name='eight' value='8' onClick={pushBtn}/></td>
            <td><input type="button" className='btn' name='nine' value='9' onClick={pushBtn}/></td>
            <td><input type="button" className='btn operator' name='plus' value='+' onClick={pushBtn}/></td>
          </tr>
          <tr>
            <td><input type="button" className='btn' name='four' value='4' onClick={pushBtn}/></td>
            <td><input type="button" className='btn' name='five' value='5' onClick={pushBtn}/></td>
            <td><input type="button" className='btn' name='six' value='6' onClick={pushBtn}/></td>
            <td><input type="button" className='btn operator' name='minus' value='-' onClick={pushBtn}/></td>
          </tr>
          <tr>
            <td><input type="button" className='btn' name='one' value='1' onClick={pushBtn}/></td>
            <td><input type="button" className='btn' name='two' value='2' onClick={pushBtn}/></td>
            <td><input type="button" className='btn' name='three' value='3' onClick={pushBtn}/></td>
            <td><input type="button" className='btn operator' name='times' value='*' onClick={pushBtn}/></td>
          </tr>
          <tr>
            <td><input type="button" className='btn operator' name='clear' value='C'  onClick={C}/></td>
            <td><input type="button" className='btn' name='zero' value='0' onClick={pushBtn}/></td>
            <td><input type="button" className='btn operator' name='' value='=' onClick={equal}/></td>
            <td><input type="button" className='btn operator' name='devide' value='/' onClick={pushBtn}/></td>
          </tr>
        </table>
    </div>
  );
}

export default App;
