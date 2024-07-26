import React, { useState } from 'react';
import './App.css'; // Import the CSS file for styles

const conversionFactors = {
  // Paki, Bigha, and Decimal
  paki: 1,
  bigha: 1,
  decimal: 33,
  shotangsho: 435.6,
  kattah: 1.65,
  katha: 165,
  ojutangsho: 100,
  kora: 4,
  gonda: 20,
  kani: 120,

  // Square Feet and Kani
  squareFeet: 17280,
  squareMeter: 1619,
  squareLink: 40000,
  squareHat: 7680,
  bargogoz: 1936,
  acore: 40,

  // 8 Hat Nol
  nol: 12,
  bargoNol: 120,

  // Kani and Gonda as Square Feet
  kaniSquareFeet: 17280,
  gondaSquareFeet: 864,
  koraSquareFeet: 216,
  krantiSquareFeet: 72,
  tilSquareFeet: 3.6,

  // Square Feet and Acore
  chain: 66,
  squareChain: 43560,
  shotok: 435.6,

  // Square Link, Acore, and Shotok
  link: 100,
  squareLinkAcore: 100000,
  shotokSquareLink: 1000,

  // Kani and Gonda as Square Link
  kaniSquareLink: 40000,
  gondaSquareLink: 2000,
  koraSquareLink: 500,
  krantiSquareLink: 160.66,
  tilSquareLink: 8.33,

  // 8 Hat Nol as Square Hat
  kaniSquareHat: 7680,
  gondaSquareHat: 384,
  koraSquareHat: 96,
  krantiSquareHat: 32,
  tilSquareHat: 1.6,

  // Kani and Gondar as Bargo Gaz/Yard
  kaniBargoGaz: 1936,
  gondaBargoGaz: 96.8,
  koraBargoGaz: 24.2,
  krantiBargoGaz: 8.06,
  tilBargoGaz: 0.40,

  // Kani and Gondar as Square Meter
  kaniSquareMeter: 1605,
  gondaSquareMeter: 80.25,
  koraSquareMeter: 20.06,
  krantiSquareMeter: 6.68,
  tilSquareMeter: 0.334,

  // Acore and Shotok
  acoreSquareChain: 10,
  acoreShotok: 100,
  acoreSquareFeet: 43560,
  acoreSquareHat: 19360,
  acoreBorgoGaz: 4840,
  acoreSquareMeter: 4047,
  acoreSquareLink: 100000,
  acoreBigha: 3,
  acoreChotak: 8,
  acoreKattah: 60.5,
  acoreKani: 2,
  acoreGonda: 10,
};

const convertUnits = (value, fromUnit, toUnit) => {
  const fromFactor = conversionFactors[fromUnit];
  const toFactor = conversionFactors[toUnit];

  if (fromFactor && toFactor) {
    return value * fromFactor / toFactor;
  } else {
    return null;
  }
};


const App = () => {
  const [value, setValue] = useState(0);
  const [fromUnit, setFromUnit] = useState('squareFeet');
  const [toUnit, setToUnit] = useState('kani');
  const [log, setLog] = useState([]);

  const handleValueChange = (event) => {
    setValue(event.target.value);
  };

  const handleFromUnitChange = (event) => {
    setFromUnit(event.target.value);
  };

  const handleToUnitChange = (event) => {
    setToUnit(event.target.value);
  };

  const convertUnits = (value, fromUnit, toUnit) => {
    // Convert the units based on your conversion logic
    // For demonstration, we'll return a placeholder value
    return `${value} ${fromUnit} = ${value * 0.1} ${toUnit}`; // Placeholder conversion
  };

  const result = convertUnits(value, fromUnit, toUnit);

  const handleConvert = () => {
    if (value > 0) {
      const logEntry = `${value} ${fromUnit} = ${result}`;
      setLog([...log, logEntry]);
    }
  };

  return (
    <div className="converter-container">
      <h1>Land Unit Converter</h1>
      <div className="converter-inputs">
        <input
          type="number"
          value={value}
          onChange={handleValueChange}
          placeholder="Enter value"
          className="input-field"
        />
        <select value={fromUnit} onChange={handleFromUnitChange} className="unit-select">
          {/* Add options dynamically */}
          {[
            'squareFeet', 'kani', 'gonda', 'kora', 'kranti', 'til',
            'bigha', 'paki', 'decimal', 'shotangsho', 'kattah',
            'katha', 'ojutangsho', 'acore', 'squareMeter', 'squareLink',
            'squareHat', 'bargoGaz'
          ].map(unit => (
            <option key={unit} value={unit}>{unit}</option>
          ))}
        </select>
        <select value={toUnit} onChange={handleToUnitChange} className="unit-select">
          {/* Add options dynamically */}
          {[
            'squareFeet', 'kani', 'gonda', 'kora', 'kranti', 'til',
            'bigha', 'paki', 'decimal', 'shotangsho', 'kattah',
            'katha', 'ojutangsho', 'acore', 'squareMeter', 'squareLink',
            'squareHat', 'bargoGaz'
          ].map(unit => (
            <option key={unit} value={unit}>{unit}</option>
          ))}
        </select>
        <button onClick={handleConvert} className="convert-button">Convert</button>
      </div>
      <div className="result">Result: {result}</div>
      <div className="log-section">
        <h2>Conversion Log</h2>
        <ul>
          {log.map((entry, index) => (
            <li key={index}>{entry}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;