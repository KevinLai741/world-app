import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
// import TimeViewer from './components/TimeViewer';
// import CurrencyConverter from './components/CurrencyConverter';
// import WeatherViewer from './components/WeatherViewer';
// import LocaleNews from './components/LocaleNews';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> World App </h1>
          <Nav />
          {/* <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/time" element={<TimeViewer/>} />
            <CurrencyConverter />
            <WeatherViewer />
            <LocaleNews />
          </Routes> */}
      </header>
    </div>
  );
}

export default App;
