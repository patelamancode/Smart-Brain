import React from 'react';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/imagelinkform/ImageLinkForm';
import Rank from './components/rank/Rank';
import Particles from 'react-particles-js';
import './App.css';


// this particleObject is comming from react-partical.js it shows background effect.
const particalObject = {
  particles: {
    number: {
      value:150,
      density: {
        enable: true,
        value_area:750
      }
    }
  }
}
class App extends React.Component {
  render(){  
    return (
      <div className="App">
          <Particles className='particles'
            params={particalObject}
         />
        <Navigation/>
        <Logo/>
        <Rank/>
        <ImageLinkForm/>
      </div>
     );
  }  
}

export default App;
