import './css/App.css';
import logoInicio from './imagen/vectorpaint (1).svg';
import Boton from './componentes/boton'
import Pantalla from './componentes/pantalla';
import BotonClear from './componentes/Clear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');
  const agregarInput = val =>{
    setInput(input + val);

  };
  const calcularResultado =()=>{
    if(input){
      setInput(evaluate(input));
    }else{
      alert("Error: por favor ingrese un numero. ")

    }
  }


  return (
    <div className="App">
      <div className='inicio-logo-container'>
        <p>CALCULATOR</p>
        <img 
        
        src={logoInicio}
        className='inicio-logo'
        alt='logo de incio'
        />

      </div>
      <hr>
      </hr>
      <div className='chasis'>
      <div className='contenedor-calculadora2'>
      <div className="fila">
        <Pantalla input= {input}/>
        </div>
        </div>
       
      <div className='contenedor-calculadora'>
        <div className="fila">
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>

        </div>
        <div className="fila">
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
        </div>
        <div className="fila">
         <Boton manejarClick={agregarInput}>3</Boton>
         <Boton manejarClick={agregarInput}>6</Boton>
         <Boton manejarClick={agregarInput}>9</Boton>
         <Boton manejarClick={calcularResultado}>=</Boton>  
        </div>
        <div className="fila">
        <Boton manejarClick={agregarInput}>+</Boton>
        <Boton manejarClick={agregarInput}>-</Boton>
        <Boton manejarClick={agregarInput}>*</Boton>
        <Boton manejarClick={agregarInput}>/</Boton>
        </div>
      </div>

      
      <div  className='contenedor-calculadora3'>
      <BotonClear ManejarClear={() => setInput('')}>
        Clear </BotonClear>
      </div> 
      </div>
      
        
    </div>
  );
}

export default App;
