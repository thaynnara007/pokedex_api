import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './About.css'

class About extends React.Component{

  render(){
    return(
      <div>
        <div className="container about-box">
          <div className="about-head">
            <p className="about-font-head">{this.props.title}</p>
          </div>
          <div className="about-body">
            {this.props.body}
          </div>
          <br></br>
        </div>
      </div>
    )
  }
}

export default About;