import './App.css';
import Calculator from './Calculator';
import { useState } from 'react';

function App() {
  const [input1, setInput1] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    setInput1((prevInput) => prevInput + value);
  };
  const handleEqualsClick = () => {
    try {
      const ans = eval(input1);
      setResult(ans); 
    } catch (error) {
      setResult('Error');
    }
  };
  const handlereset=()=>{
    setInput1('')
  }
  const handlebackspace=()=>{
    setInput1((prevInput) => prevInput.slice(0, -1));
  }
  const handleInputChange = (e) => {
    setInput1(e.target.value);
  };
  const handleKeyPress = (e) => {
    // Handle keyboard input for digits, operators, and backspace
    const key = e.key;
    if ((/[0-9]/.test(key) || ['+', '-', '*', '/', '.'].includes(key)) && !e.ctrlKey && !e.metaKey) {
      e.preventDefault();
      setInput1((prevInput) => prevInput + key);
    } else if (key === 'Enter') {
      e.preventDefault();
      handleEqualsClick();
    } else if (key === 'Backspace') {
      handlebackspace();
    }
  };
  return (
    <div className="App">
      <Calculator
      input1={input1}
      result={result}
      handleButtonClick={handleButtonClick}
      handleEqualsClick={handleEqualsClick}
      handlereset={handlereset}
      handlebackspace={handlebackspace}
      handleInputChange={handleInputChange}
      handleKeyPress={handleKeyPress}
      />

    </div>
  );
}

export default App;
