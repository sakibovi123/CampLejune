import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </>
  );
}

export default App;
