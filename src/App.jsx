import React, { useState } from 'react';
import './App.css'

import Header from "./components/header/Header";
import CardUser from './components/CardUser/CardUser';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';

import valorant from "./assets/img/valorant.png";
// import valorant from "./assets/img"


const App = () => {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <Header 
      title="Bayside Team" 
      />
      <NavBar />
      <ItemListContainer  />
    
      <div className='UserSection'>
        <CardUser  
          name="Rainbow 6"
          date="Conformado en agosto"
          description="El equipo tiene 5 integrantes y juegan en torneos"
          img="rainbow"
        />
        
        <CardUser  
          name="Valorant"
          date="Conformado en septiembre"
          description="El equipo tiene 5 jugadores, 1 coach y 1 analista"
          img="valorant"
        />
        
        <CardUser  
          name="Free Fire"
          date="Proximamente conformado"
          description="Proximamente aparecera en la nueva seccion"
          img="freefire"
        />
      </div>  
      <div className='CounterSection'>
        <p>{}</p>
      </div>  
    </div>
    
  );
};



export default App;
