import React from 'react';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/imagelinkform/ImageLinkForm';
import FaceRecognition from './components/facerecognition/FaceRecognition';
import Rank from './components/rank/Rank';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai'
import './App.css';


// this particleObject is comming from "react-partical.js" it shows background effect.


const app = new Clarifai.App({
  apiKey: 'fdd1ada30f534811a38953615eff72a2'
});



// @@
// const {ClarifaiStub, grpc} = require("clarifai-nodejs-grpc");

// const stub = ClarifaiStub.grpc();

// // This will be used by every Clarifai endpoint call.
// const metadata = new grpc.Metadata();
// metadata.set("authorization","fdd1ada30f534811a38953615eff72a2");
// @@@



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
  // onhover: {
  //   enable: true,
  //   mode: 'repulse'
  // }
}



class App extends React.Component {

  constructor(){
    super();
    this.state= {
      input: '',
    }
  }

  // events happen on imagelinkform in input,button tag.
  onInputChange = (event) =>{  
    console.log(event.target.value);
  }

  onDetectBtn = () => {
    console.log('click');


    app.models
     .predict("eeed0b6733a644cea07cf4c60f87ebb7",  "https://samples.clarifai.com/face-det.jpg")
       .then(
         function(response) {
          console.log(response)
         },
         function(err) {

         }
        )
  }


  render(){  
    return (
      <div className="App">
          <Particles className='particles'
            params={particalObject}
         />
        <Navigation/>
        <Logo/>
        <Rank/>
        <ImageLinkForm 
          onInputChange = {this.onInputChange}
          onDetectBtn = {this.onDetectBtn}
        />
        <FaceRecognition/>
      </div>
       );
   }  
}  


export default App;
