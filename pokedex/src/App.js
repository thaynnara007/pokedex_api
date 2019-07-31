import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Predict from './components/predict/Predict'

class App extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      about:true,
      try: false,
      how: false
    }

    this.click = this.click.bind(this)
    this.renderPage = this.renderPage.bind(this)
  }

  click(event, data){
    this.setState({
      about: (data == 'about'),
      try: (data == 'try'),
      how: (data == 'how')
    })
  }

  renderPage(){
    
    if (this.state.about){ 
      const title = 'What is it?'
      const body = (<p>This is a artificial intelligence that has as goal recognizing some pokemons images
      The model produced can classify seven pokemons, which are: pikachu, charmander, squirtle 
      bulbasaur, cyndaquil, totodile and chikorita, so, even if its given a image which it is no
      part  of that seven ones, the model is going to try classify the image amoung the seven.</p>)
      
      return (<About title={title} body={body}></About>)
    }
    else if (this.state.try) return (<Predict></Predict>)
    else{
      const title = "Neural network"
      const body = (<p>It was built and trained a convolutional neural network with a data
      set of about 8490 images. For more details visit the
      <a href="https://github.com/thaynnara007/pokedex"> github repository</a></p>)
    
      return (<About title={title} body={body}></About>)
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar about={this.state.about} try={this.state.try} 
        how={this.state.how} click={this.click}></Navbar>
        <div>
          {this.renderPage()}
        </div>
      </div>
    );
  }
}

export default App;
