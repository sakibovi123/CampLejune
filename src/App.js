import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Privacy from './pages/Privacy/Privacy';
import Terms from './pages/Terms/Terms';
import Thanks from './pages/Thanks/Thanks';
import NotFound from './pages/NotFound/NotFound';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/privacy-policy' element={<Privacy />}></Route>
        <Route path='/terms-condition' element={<Terms />}></Route>
        <Route path='/thanks' element={<Thanks />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
