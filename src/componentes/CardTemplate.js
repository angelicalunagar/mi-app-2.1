import Card from 'react-bootstrap/Card';
import est_1 from '../imagenes/est_1.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FuncionAGraficar from './FuncionAGraficar';
import Board from './Board';
import { useRef } from 'react';




function CardTemplate(props){
  const brd = useRef(null);
  return(
    <>
      <Row>
        <Col xs={12}>
          <Card border="primary">
            <Card.Header>Bloque 1 </Card.Header>
            <Row>
              <Col xs={6}>
                <FuncionAGraficar brd={brd}/>
                <Board brd={brd}/>
                
              </Col>
              <Col xs={6}>
                <Card.Body>
                  <Card.Title>Funciones</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
}
export default CardTemplate;
