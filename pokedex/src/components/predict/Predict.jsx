import React from 'react'
import image from '../../img/132.png'
import './Predict.css'
import Api from '../Api'

class Predict extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      file: null,
      url: null,
      predictions: []
    }
    this.renderImage = this.renderImage.bind(this)
    this.predict = this.predict.bind(this)
    this.renderPredictions = this.renderPredictions.bind(this)
  }

  uploadImage(event){
    
    let file = undefined
    let url = undefined

    if(event.target.files[0]){ 
        file = event.target.files[0];
        url = URL.createObjectURL(file);
    }else{    
        file = this.state.file;
        url = this.state.url;
    }
    this.setState({
        file : file,
        url: url
    })
  }

  predict(event){
    event.preventDefault()

    let formData = new FormData()
    formData.append('image', this.state.file)
    
    Api.post('pokedex/predict', formData)
    .then( response =>{
      
      this.setState({
        file: this.state.file,
        url: this.state.url,
        predictions: response.data.predictions
      })
    })
    .catch( error =>{
      console.log(error)
    })
  }

  renderImage(){
    return (<img className="img-size" src={(this.state.url != null) ? this.state.url : image} alt=""></img>)
  }

  renderPredictions(){

    var info = this.state.predictions.map((prediction, num) => {
      return (<div key={num}><p>{prediction.label}: {prediction.probability}</p></div>)
    })

    return info
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
            <button className="btn btn-outline-primary predict-button"
            onClick={this.predict}>Predict</button>
          </div>
        </div>
          <div className="container result-box">
            <details>
              <summary>Results</summary>
              {this.renderPredictions()}
            </details>
        </div>
      </div>
    )
  }

}

export default Predict