import React from 'react';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/imagelinkform/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';


function App() {
  return (
    <div className="App">
      <Navigation/>
      <Logo/>
      <Rank/>
      <ImageLinkForm/>

    </div>
  );
}

export default App;
