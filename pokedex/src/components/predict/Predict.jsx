import React from 'react'
import image from '../../img/132.png'
import './Predict.css'

class Predict extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      file: null,
      typeFile: null,
      url: null
    }
    this.renderImage = this.renderImage.bind(this)
  }

  uploadImage(event){
    
      var file = undefined;
      var type = undefined;
      var url = undefined;
      if(event.target.files[0]){ 
          type = event.target.files[0].type
          file = event.target.files[0];
          url = URL.createObjectURL(file);
      }else{    
          file = this.state.file;
          type = this.state.type;
          url = this.state.url;
      }
      this.setState({
          file : file,
          typeFile : type,
          url: url
      })
    
  }

  renderImage(){
    return (<img className="img-size" src={(this.state.url != null) ? this.state.url : image} alt=""></img>)
  }

  render(){
    return (
      <div>
        <div className="container img-box">
          <div>{this.renderImage()}</div>
          <div className="upload">
            <button className="btn btn-outline-success upload-button">
              Upload a pokemon
            </button>
            <input type="file" name="myFile"
            onChange={(event) => this.uploadImage(event, 'file')}></input>
          </div>
          <div>
            <button className="btn btn-outline-primary predict-button">Predict</button>
          </div>
        </div>
          <div className="container result-box">
            <details>
              <summary>Results</summary>
              <div><p>Pikachu: 0.0%</p></div>
              <div><p>Charmander: 0.0%</p></div>
              <div><p>Squirtle: 0.0%</p></div>
              <div><p>Bulbasaur: 0.0%</p></div>
              <div><p>Cyndaquil: 0.0%</p></div>
              <div><p>Totodile: 0.0%</p></div>
              <div><p>Chikorita: 0.0%</p></div>
            </details>
        </div>
      </div>
    )
  }

}

export default Predict