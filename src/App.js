import React from 'react';
import Encabezado from './componentes/Encabezado'; // Importa el componente
import {Routes, Route} from 'react-router-dom';
import AppAprende from './AppAprende';
import PaginaGeneral from './componentes/PaginaGeneral';
import './App.css'
import Bloque1 from './componentes/Bloque1';
import Bloque2 from './componentes/Bloque2';
import Bloque3 from './componentes/Bloque3';
import Bloque4 from './componentes/Bloque4';
import Bloque5 from './componentes/Bloque5';


function App() {
    return (
        <div className='App'>
            <Encabezado 
                imagen1="cinves"
                imagen2="matedu"/>
            <div className='contenido-pagina'>
            <Routes >
                <Route path='/' element={
                    <>
                        <PaginaGeneral
                            id="inicio"
                            color="black"
                            colorFondo="#FF821C"
                            titulo="Caracterización de una función usando la derivada"
                            texto="Esta página web está pensada para que aprendas el concepto de derivada y su utilidad para caracterizar funciones. El objetivo es que aprendas con el mínimo de teoría, de forma intuitiva e interactiva para que las matemáticas dejen de ser aburridas y complicadas." 
                        />
                        <PaginaGeneral
                            id="quienes-somos"
                            color="white"
                            colorFondo="#7D0D1A"
                            titulo="¿Quiénes somos?"
                            texto="Somos un grupo de investigadores del Departamento de Matemática Educativa del Centro de Investigación y de Estudios de Posgrado del IPN. Actualmente estudiamos el impacto de las tecnologías digitales en la enseñanza y el aprendizaje de las matemáticas para modificar el currículum y la manera de enseñar." 
                        />
                        <PaginaGeneral
                                id="contactanos"
                                color="black"
                                colorFondo="#2EC4B6"
                                titulo="Contáctanos"    
                                texto={
                                    <div>
                                        Si tuvieras alguna duda o sugerencia sobre el proyecto, no dudes en ponerte en contacto con nosotros:
                                        <br />

            
                                        Angélica Luna García <br />
                                        angelica.luna@cinvestav.mx <br />
                                        2221754139
                                        <br />
                                        <br />
                                        Hugo Rogelio Mejía Velasco <br />
                                        hmejia@cinvestav.mx <br />
                                        (52)+(55) 57473800 extensión 6013
                                    </div>
                                } 
                        />
                    </>
                }/>
                <Route path='/aprende' element={<AppAprende />}/>
                <Route path='/aprende/bloque1' element={<Bloque1 />}/>
                <Route path='/aprende/bloque2' element={<Bloque2 />}/>
                <Route path='/aprende/bloque3' element={<Bloque3 />}/>
                <Route path='/aprende/bloque4' element={<Bloque4 />}/>
                <Route path='/aprende/bloque5' element={<Bloque5 />}/>
                {/* <Route path='*' element={<h2>Ruta inválida</h2>}/> */}
            </Routes>
            </div>
        </div>
    );
}

export default App;
