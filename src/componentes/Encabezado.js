import React from 'react';
import "../estilos/Encabezado.css"
import {Link, useNavigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Nav, Navbar} from 'react-bootstrap'

const Encabezado = (props)=> {
  const navigate = useNavigate(); // Obtiene el objeto de navegación

    // Función para navegar a la ruta raíz "/"
    const navigateToInicio = () => {
        navigate("/");
    };
    const navigateToQuienesSomos = () => {
        navigate("/#quienes-somos");
    };
    const navigateToContactanos = () => {
        navigate("/#contactanos");
    };
  return(
    <div className="fija"> 
      <Navbar collapseOnSelect expand="lg" className="encabezado">
      <Container>
        <Navbar.Brand href="#">Cálculo Bachillerato</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <div className="encabezado-logos">
                <img className="logo uno" src={require(`../imagenes/logo_${props.imagen1}.png`)} alt="Logo del Cinvestav" />
                <img className="logo dos" src={require(`../imagenes/logo_${props.imagen2}.png`)} alt="Logo del Departamento de Matemática Educativa" />
            </div>
          </Nav>
          <Nav className='encabezado-links'>
            <Nav.Link href="#inicio" onClick={navigateToInicio}>Inicio</Nav.Link>
            <Nav.Link href="#quienes-somos" onClick={navigateToQuienesSomos}>Quienes somos</Nav.Link>
            <Nav.Link href="#contactanos" onClick={navigateToContactanos}>Contáctanos</Nav.Link>
            <Nav.Link href="#aprende" as={Link} to="/aprende"/* "/aprende" */>Aprende</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>

)
}
export default Encabezado;
    




/* import React from 'react';
import "../estilos/Encabezado.css"
import {Link, useNavigate} from 'react-router-dom';

const Encabezado = (props) =>{
    const navigate = useNavigate(); // Obtiene el objeto de navegación

    // Función para navegar a la ruta raíz "/"
    const navigateToInicio = () => {
        navigate("/");
    };
    const navigateToQuienesSomos = () => {
        navigate("/#quienes-somos");
    };
    const navigateToContactanos = () => {
        navigate("/#contactanos");
    };
    return (
        <header className="encabezado">
            <div className="encabezado-logos">
                <img className="logo" src={require(`../imagenes/logo_${props.imagen1}.png`)} alt="Logo del Cinvestav" />
                <img className="logo" src={require(`../imagenes/logo_${props.imagen2}.png`)} alt="Logo del Departamento de Matemática Educativa" />
            </div>
            <ul className="encabezado-links">
                <li><a href="#inicio" onClick={navigateToInicio}>Inicio</a></li>
                <li><a href="#quienes-somos" onClick={navigateToQuienesSomos}>¿Quiénes somos?</a></li>
                <li><a href="#contactanos" onClick={navigateToContactanos}>Contáctanos</a></li>
                <li><Link to='/aprende'>Aprende</Link></li>
            </ul>
        </header>
    );
}

export default Encabezado; */




