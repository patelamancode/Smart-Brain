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
      imageUrl: '',
      box: {}
    }
  }

  calculateFaceDetection = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return{
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col *width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    console.log(box)
    this.setState({box: box});
  }


  // events happen on imagelinkform in input,button tag.
  onInputChange = (event) =>{  
    this.setState({input: event.target.value});
  }

  onDetectBtn = () => {
    this.setState({imageUrl: this.state.input});
    app.models
     .predict("53e1df302c079b3db8a0a36033ed2d15",  this.state.input)
        .then(response => this.displayFaceBox(this.calculateFaceDetection(response))) 
        .catch(err => console.log(err));  
        
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
