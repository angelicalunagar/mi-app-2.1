import { useEffect } from 'react';
import { JSXGraph } from 'jsxgraph';

const Board = (props) => {
  useEffect(() => {
    if (!props.brd.current) {
      const board = JSXGraph.initBoard('jsxgraph-container', {
        boundingbox: [-5, 5, 5, -5],
        axis: true,
        pan: {
          needShiftToPan: true,
          enabled: true,
        }
      });
      props.brd.current = board;
    }
  }, []);

  return <div id="jsxgraph-container" style={{ width: '100%', height: '400px' }}></div>;
};

export default Board;
