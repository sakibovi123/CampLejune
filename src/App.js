import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
    <Header />
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
