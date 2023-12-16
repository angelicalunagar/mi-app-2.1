import React, { useEffect, useState } from 'react';

  const Perpendiculares = (props) => {
    const [functionExpression, setFunctionExpression] = useState(props.func);
    const [pointCoordinates, setPointCoordinates] = useState({ x: 0, y: 0 });
    const board = props.brd.current;

    useEffect(() => {
      if (board !== null){
        const slider = board.create('slider', [[0, 4], [3, 4], [-2, 4, 5]]);

 /*      const updateFunctionAndCoordinates = (x, a) => {
        const expr = props.func.replace("a", `(${a})`);
        setFunctionExpression(expr);

        const computedValue = Function("x", `return ${expr}`)(x);
        setPointCoordinates({ x, y: computedValue });
      }; */

      const selectedFunction = (x, a) => {
        const expr = props.func.replace("a", `(${a})`);
        return Function("x", `return ${expr}`)(x);
      };

      board.suspendUpdate();
      const curve = board.create('functiongraph', [
        x => selectedFunction(x, slider.Value())
      ]);

      const glider = board.create('glider', [0.6, 1.2, curve]);

      const perpendicularToXAxis = board.create('segment', [
        [()=> glider.X(), 0], [()=>glider.X(), ()=>glider.Y()]
      ], { straightFirst: false });
      
      const perpendicularToYAxis = board.create('segment', [
        [0, ()=> glider.Y()], [()=> glider.X(), ()=>glider.Y()]
      ], { straightFirst: false });
      
      
      board.update(); // Actualizar el tablero

      }
  
    });

    return (
      <div className='perpendiculars-container'>
        <div id="perpendiculars-container" className='jxgbox color-marco' style={{ width: '100%', height: '400px' }}/>
        <div>
          <p>Función: {functionExpression}</p>
          <p>Coordenadas del punto: ({pointCoordinates.x}, {pointCoordinates.y})</p>
        </div>
      </div>
    );
  };

  export default Perpendiculares;


