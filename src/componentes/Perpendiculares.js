//Perpendiculares.js
import React, { useEffect, useContext, useState } from 'react';
import { FuncionContext } from './FuncionContexto';
import { JSXGraph } from 'jsxgraph';

  const Perpendiculares = (props) => {
    //const { selectedFunc, brd } = useContext(FuncionContext);
    const funcionContext = useContext(FuncionContext);
  
    useEffect(() => {
      const board = JSXGraph.initBoard('perpendiculars-container', {
        boundingbox: [-5, 5, 5, -5],
        axis: true,
        pan: {
          needShiftToPan: true,
          enabled: true,
        },
        showcopyright: false,
      });

      props.brd.current = board;

      const slider = board.create('slider', [[0, 4], [3, 4], [-2, 4, 5]]);

      const selectedFunction = (x, a) => {
        const expr = props.func.current.replace("a", `(${a})`);
        return Function("x", `return ${expr}`)(x);
      };

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

    });

    return (
      <div className='perpendiculars-container'>
        <div id="perpendiculars-container" className='jxgbox color-marco' style={{ width: '100%', height: '400px' }}/>
      </div>
    );
  };

  export default Perpendiculares;


