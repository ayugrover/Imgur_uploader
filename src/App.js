import React, { Component } from 'react';
import Images from './component/Images';
import './App.css';
import axios from 'axios';

class App extends Component{

  state = { selectedImage: '/pictures/63.jpg', imgurUrl : 'https://imgur.com'};
  

    onFileSelect = event  => {
        this.setState({selectedImage : event.target.files[0]
        })
      }
    
    onFileUpload = () => { 
      const fd = new FormData();
      fd.append('image', this.state.selectedImage);

        const headers ={
          'Authorization' :   'Client-ID 8a02a1adcf0cb6d'
        };
       
          axios.post('https://api.imgur.com/3/image', fd, {headers})
          .then(res =>{
            this.setState({imgurUrl: res.data.data.link}); 
            console.log(res.data.data.link);
          });
    }
  

render() {
   return (
        <div className="ui container" style = {{border: '2px solid blue'}}>
          <div className="App-header">
              <h2>Image Uploader</h2>
          </div>
          <br/>
           <div className = "ui container App" >
              <label>Choose Image - </label>
              <input type="file" className="image-selected" onChange={this.onFileSelect}/>
              <Images src={this.state.selectedImage} alt={this.state.selectedImage.name}/>
              <button onClick={this.onFileUpload.bind(this)} className="ui button primary">Upload</button>
              <br/>
              <label>URL :</label>
                 <a href= {this.state.imgurUrl} >Click here to view uploaded image</a>
           </div>
        </div>
      ); 
    }
}

export default App;
