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
      imageUrl: ''
    }
  }

  // events happen on imagelinkform in input,button tag.
  onInputChange = (event) =>{  
    this.setState({input: event.target.value});
  }

  onDetectBtn = () => {
    this.setState({imageUrl: this.state.input});
    app.models
     .predict("53e1df302c079b3db8a0a36033ed2d15",  this.state.input)
       .then(
         function(response) {
          console.log(response.outputs[0].data.regions[0].regions_info.bounding_box);
         },
         function(err) {

         }
        )
  }


  render() {  
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
         <FaceRecognition imageUrl= {this.state.imageUrl}/>
      </div>
       );
   }  
}  


export default App;
