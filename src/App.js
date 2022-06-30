import React, { useState } from 'react';
import './sass/app.scss';
import LogIn from "./container/LogIn";
// import MainSection from "./container/MainSection";
import SignUpModal from "./components/SignUpModal";

function App() {
  return (
    <div className="App">
      <LogIn />
    </div>
  );
}

export default App;
