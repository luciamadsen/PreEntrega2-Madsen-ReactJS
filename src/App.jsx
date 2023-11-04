// import React, {useState} from "react"
// import './App.css'
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // Components
// import Header from "./components/Header/Header";
// import NavBar from "./components/NavBar/NavBar";

// // Pages
// import HomePage from "./pages/Homepage/Homepage";
// import AboutPage from "./pages/Aboutpage/Aboutpage";
// import ContactPage from "./pages/ContactPage/ContactPage";
// import DetailPage from "./pages/DetailPage/DetailPage";
// import NotFound from "./pages/NotFound/Notfound";
// import CategoryPage from "./pages/CategoryPage/CategoryPage";

// const App = () => {
//   const [hasError, setHasError] = useState(true);

//   return (
//     <Router>
//       <div className="App">
//         <Header />
//         <NavBar />
//         <Routes>
//           <Route path="/" element={<HomePage/>} />
//           <Route path="/about" element={<AboutPage />} />
//           <Route path="/contact" element={<ContactPage />} />
//           <Route path="/detail/:id" element={<DetailPage />} />
//           {hasError ? <Route path="*" element={<NotFound />} /> : null}
//           {<Route path="/category/:categoryId" element={<CategoryPage />} />}
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App; 

//import './App.css'
import './style.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { CartContextProvider } from './context/CartContext';
import { Checkout } from './components/Checkout';
import { Cart } from './components/Cart';

function App() {

  return (
    <CartContextProvider >
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path = '/' element = {<ItemListContainer />} />
        <Route exact path = '/category/:id' element = {<ItemListContainer />} />
        <Route exact path = '/item/:id' element = {<ItemDetailContainer />} />
        <Route exact path = '/checkout' element = {<Checkout />} />
        <Route exact path = '/cart' element={<Cart />} />
        <Route path = '*' element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
    </CartContextProvider>
  )
}

export default App