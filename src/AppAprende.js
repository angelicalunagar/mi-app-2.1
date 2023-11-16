import './AppAprende.css';
import Bloque from './componentes/Bloque';
import React, { useEffect } from 'react';
import Bloque1 from './componentes/Bloque1';
import Bloque2 from './componentes/Bloque2';
import Bloque3 from './componentes/Bloque3';
import Bloque4 from './componentes/Bloque4';
import Bloque5 from './componentes/Bloque5';
import {Routes, Route} from 'react-router-dom';

function AppAprende() {
  useEffect(() => {
    const inicioDePagina = document.querySelector('body');
    inicioDePagina.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className="AppAprende">
      <div className='contenedor-principal'>
        <Bloque
          titulo="BLOQUE 1" 
          subtitulo="Funciones"
          imagen="bloque1"
          descripcionImagen="Funciones"
          bloque="/aprende/bloque1"
          />
          
        <Bloque
          titulo="BLOQUE 2" 
          subtitulo="Construcción de la derivada de una función"
          imagen="bloque2"
          descripcionImagen="Derivada"
          bloque="/aprende/bloque2" />
          
          
        <Bloque
          titulo="BLOQUE 3" 
          subtitulo="Crecimiento, decrecimiento, máximos y mínimos de una función"
          imagen="bloque3"
          descripcionImagen="Máximos y mínimos"
          bloque="/aprende/bloque3" />
          
        <Bloque
          titulo="BLOQUE 4" 
          subtitulo="Concavidad, segunda derivada y puntos de inflexión"
          imagen="bloque4"
          descripcionImagen="Concavidad y puntos de inflexión de una función"
          bloque="/aprende/bloque4"/>
          
        <Bloque
          titulo="BLOQUE 5" 
          subtitulo="Práctica interactiva para caracterizar una función usando la primera y segunda derivada."
          imagen="bloque5"
          descripcionImagen="Estudiante practicando en la computadora"
          bloque="/aprende/bloque5"/>
      </div>
      <Routes>
        <Route path='/aprende/bloque1' element={<Bloque1 />}/>
        <Route path='/aprende/bloque2' element={<Bloque2 />}/>
        <Route path='/aprende/bloque3' element={<Bloque3 />}/>
        <Route path='/aprende/bloque4' element={<Bloque4 />}/>
        <Route path='/aprende/bloque5' element={<Bloque5 />}/>
      </Routes>
    </div>
  );
}

export default AppAprende;

