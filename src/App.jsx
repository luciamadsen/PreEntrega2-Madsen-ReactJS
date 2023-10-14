import React, {useState} from "react"
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";

// Pages
import HomePage from "./pages/Homepage/Homepage";
import AboutPage from "./pages/Aboutpage/Aboutpage";
import ContactPage from "./pages/ContactPage/ContactPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import NotFound from "./pages/NotFound/Notfound";
import CategoryPage from "./pages/CategoryPage/CategoryPage";

const App = () => {
  const [hasError, setHasError] = useState(true);

  return (
    <Router>
      <div className="App">
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          {hasError ? <Route path="*" element={<NotFound />} /> : null}
          {<Route path="/category/:categoryId" element={<CategoryPage />} />}
        </Routes>
      </div>
    </Router>
  );
};

export default App;





// import React, { useState } from 'react';
// import './App.css'

// import Header from "./components/header/Header";
// import CardUser from './components/CardUser/CardUser';
// import NavBar from './components/NavBar/NavBar';
// import ItemListContainer from './components/itemListContainer/ItemListContainer';

// import valorant from "./assets/img/valorant.png";
// // import valorant from "./assets/img"


// const App = () => {
//   const [number, setNumber] = useState(1);
//   return (
//     <div>
//       <Header 
//       title="Bayside Team" 
//       />
//       <NavBar />
//       <ItemListContainer  />
    
//       <div className='UserSection'>
//         <CardUser  
//           name="Rainbow 6"
//           date="Conformado en agosto"
//           description="El equipo tiene 5 integrantes y juegan en torneos"
//           img="rainbow"
//         />
        
//         <CardUser  
//           name="Valorant"
//           date="Conformado en septiembre"
//           description="El equipo tiene 5 jugadores, 1 coach y 1 analista"
//           img="valorant"
//         />
        
//         <CardUser  
//           name="Free Fire"
//           date="Proximamente conformado"
//           description="Proximamente aparecera en la nueva seccion"
//           img="freefire"
//         />
//       </div>  
//       <div className='CounterSection'>
//         <p>{}</p>
//       </div>  
//     </div>
    
//   );
// };



// export default App;
