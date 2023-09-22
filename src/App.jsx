import React, { useState } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

// import valorant from "./assets/img"

import Header from "./components/header/Header";
import CardUser from './components/CardUser/CardUser';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';

// import img from "./7.png";

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
          description="El equipo tiene 5 integrantes"
          img=""
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
          img="images/7.png"
        />
      </div>  
      <div className='CounterSection'>
        <p>{}</p>
      </div>  
    </div>
    
  );
};



export default App;
