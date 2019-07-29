import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './About.css'

class About extends React.Component{

  render(){
    return(
      <div>
        <div className="container about-box">
          <div className="about-head">
            <p className="about-font-head">What does it do?</p>
          </div>
          <div className="about-body">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
              perferendis quas incidunt id obcaecati sit iusto, temporibus consectetur ut 
              similique nesciunt dolores 
              neque voluptatibus, debitis aliquam facere suscipit cumque dolorum!</p>
          </div>
          <br></br>
        </div>
      </div>
    )
  }
}

export default About;