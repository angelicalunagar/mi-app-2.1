import React, { useState, useRef} from 'react';
import Perpendiculares from './Perpendiculares';

  const FuncionAGraficar = (props) => {
    const [selectedFunc, setSelectedFunc] = useState("a*x");
    
    const handleFuncChange = (e) => {
      setSelectedFunc(e.target.value);
    };

    return (
      <div className="funcion-grafica">
        <h2>Selecciona una función:</h2>
        <select value={selectedFunc} onChange={handleFuncChange}>
          <option value="a*x">f(x) = x</option>
          <option value="a*x**2">f(x) = x^2</option>
          <option value="a*x**3">f(x) = x^3</option>
          <option value="a*x**4">f(x) = x^4</option>
        </select>

        <div className="grafica-container">
          <Perpendiculares func={selectedFunc} brd={props.brd}/>
        </div>
      </div>
    );
  };

  export default FuncionAGraficar;


