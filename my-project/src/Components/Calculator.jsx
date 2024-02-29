import React, { useState } from 'react';

function Calculator() {
  const [expression, setExpression] = useState('');

  // Function to handle button clicks
  const handleButtonClick = (value) => {
    setExpression(prevExpression => prevExpression + value);
  };

  // Function to evaluate the expression
  const handleCalculate = () => {
    try {
      setExpression(eval(expression).toString());
    } catch (error) {
      setExpression('Error');
    }
  };

  // Function to clear the expression
  const handleClear = () => {
    setExpression('');
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-lg shadow-lg">
      <input
        type="text"
        className="w-full mb-4 p-2 text-right border border-gray-300 rounded"
        value={expression}
        readOnly
      />
      <div className="grid grid-cols-4 gap-4">
        {['7', '8', '9', '/'].map((value, index) => (
          <button key={index} onClick={() => handleButtonClick(value)} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">{value}</button>
        ))}
        {['4', '5', '6', '*'].map((value, index) => (
          <button key={index} onClick={() => handleButtonClick(value)} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">{value}</button>
        ))}
        {['1', '2', '3', '-'].map((value, index) => (
          <button key={index} onClick={() => handleButtonClick(value)} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">{value}</button>
        ))}
        {['.', '0', '=', '+'].map((value, index) => (
          <button key={index} onClick={() => value === '=' ? handleCalculate() : handleButtonClick(value)} className={`bg-${value === '=' ? 'blue' : 'gray'}-300 hover:bg-${value === '=' ? 'blue' : 'gray'}-400 text-gray-800 font-bold py-2 px-4 rounded`}>{value}</button>
        ))}
        <button onClick={handleClear} className="bg-red-300 hover:bg-red-400 text-gray-800 font-bold py-2 px-4 rounded col-span-2">Clear</button>
      </div>
    </div>
  );
}

export default Calculator;
