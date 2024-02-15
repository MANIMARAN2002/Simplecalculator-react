import React from 'react';
import './calculator.css';


const Calculator = ({input1,result,handleButtonClick,handleEqualsClick,handlebackspace,handlereset,handleInputChange,
  handleKeyPress}) => {
 
  return (
    <div className='main'>
      <form className='main1' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor='input'>
          <input
            className='input1'
            type='text'
            placeholder='Enter the Value'
            value={input1}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
          />
          <br />
         
        </label>
        <p className='ans'>Answer: {result}</p>
            <table className='button'  border="5" width="15%" cellpadding="15" cellspacing="15">
            <tr>
                  <td><button className='bb1' onClick={() => handleButtonClick('(')}>(</button></td>  
                  <td><button className='bc' onClick={handlereset}>C</button></td>
                  <td><button className='bb2' onClick={() => handleButtonClick(')')}>)</button></td>
                  <td><button className='bp' onClick={handlebackspace}>{'<'}</button></td>
                </tr>
                <tr>
                  <td><button className='b7' onClick={() => handleButtonClick('7')}>7</button></td>  
                  <td><button className='b8' onClick={() => handleButtonClick('8')}>8</button></td>
                  <td><button className='b9' onClick={() => handleButtonClick('9')}>9</button></td>
                  <td><button className='bd' onClick={() => handleButtonClick('/')}>/</button></td>
                </tr>
    
                <tr>
                  <td><button className='b4' onClick={() => handleButtonClick('4')}>4</button></td>  
                  <td><button className='b5' onClick={() => handleButtonClick('5')}>5</button></td>
                  <td><button className='b6' onClick={() => handleButtonClick('6')}>6</button></td>
                  <td><button className='bm' onClick={() => handleButtonClick('*')}>*</button></td>
                </tr>
                <tr>
                  <td><button className='b1' onClick={() => handleButtonClick('1')}>1</button></td>  
                  <td><button className='b2' onClick={() => handleButtonClick('2')}>2</button></td>
                  <td><button className='b3' onClick={() => handleButtonClick('3')}>3</button></td>
                  <td><button className='bs' onClick={() => handleButtonClick('-')}>-</button></td>
                </tr>
                <tr>
                  <td><button className='bt' onClick={() => handleButtonClick('.')}>.</button></td>  
                  <td><button className='b0' onClick={() => handleButtonClick('0')}>0</button></td>
                  <td><button className='bp' onClick={() => handleButtonClick('+')}>+</button></td>
                  <td><button className='be' onClick={handleEqualsClick}>=</button></td>
                </tr>
            </table>
        </form>

    </div>

  )
}

export default Calculator;