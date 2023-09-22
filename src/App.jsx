import React, { useState } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import Header from "./components/header/Header";
import CardUser from './components/CardUser/CardUser';
import NavBar from './components/NavBar/NavBar';



const App = () => {

  const [number, setNumber] = useState(1);

  return (
    <div>
      <Header 
      title="Bayside Team" 
      />
      <NavBar />
    
      <div className='UserSection'>
        <CardUser  
          name="Lucia"
          date="se unio como staff"
          description="holagola"
          img=""
        />
        <CardUser  
          name="Ian"
          date="se unio como fundador"
          description="holagola"
          img=""
        />
        <CardUser  
          name="Maria"
          date="se unio como cco"
          description="holagola"
          img=""
        />
      </div>  
      <div className='CounterSection'>
        <p>{}</p>
      </div>   
    </div>
  );
};

export default App;
