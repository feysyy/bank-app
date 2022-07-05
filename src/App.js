import React, { useState } from 'react';
import './sass/app.scss';
import LogIn from "./container/LogIn";
import MainSection from "./container/MainSection";
import SignUpModal from "./components/SignUpModal";
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={ <LogIn/>} />
        <Route path="/transactions" element={ <MainSection/>} />
     </Routes>
    </div>
  );
}

export default App;
