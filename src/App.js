import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import TimeViewer from './components/TimeViewer';
import CurrencyConverter from './components/CurrencyConverter';
import WeatherViewer from './components/WeatherViewer';
import LocaleNews from './components/LocaleNews';

function App() {
  return ( 
  <>
    <div className="App">
      <nav>
        <Navbar />
      </nav>
      <main>
        <TimeViewer />
        <CurrencyConverter />
        <WeatherViewer />
        <LocaleNews />
      </main>
          <Routes>
            <Route path="/time" element={<TimeViewer/>} />
            <Route path ="/currency" element={<CurrencyConverter/>} />
            <Route path="/weather" element={<WeatherViewer/>} />
            <Route path="/news" element={<LocaleNews/>} />
          </Routes> 
    </div>
  </>
  );
}

export default App;
