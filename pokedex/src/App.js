import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About'

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
    
    if (this.state.about) return (<About></About>)
    else return
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
