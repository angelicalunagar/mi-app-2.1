//CardTemplates.js
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FuncionAGraficar from './FuncionAGraficar';  
import Perpendiculares from './Perpendiculares';
import FuncionContextProvider from './FuncionContexto';

function CardTemplate(){
  return(
    <>
      <Row>
        <Col xs={12}>
          <Card border="primary">
            <Card.Header>Bloque 1 </Card.Header>
            <FuncionContextProvider>
            <Row>
              <Col xs={6}>
              
                <FuncionAGraficar />
              
              </Col>
              <Col xs={6}>
                <Card.Body>
                  <Card.Title>Funciones</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    
                      <Perpendiculares />
                    
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
            </FuncionContextProvider>
          </Card>
        </Col>
      </Row>
    </>
  );
}
export default CardTemplate;
