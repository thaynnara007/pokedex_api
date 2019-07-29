import React from 'react'
import './Navbar.css'

class Navbar extends React.Component{

  constructor(props){
    super(props);
  }

  render(){

    let classNameA = this.props.about ? 'nav-item click' : 'nav-item a'
    let classNameT = this.props.try ? 'nav-item click' : 'nav-item a'
    let classNameH = this.props.how ? 'nav-item click' : 'nav-item a'

    return(
      <div>
        <ul className="nav nav-pills nav-fill nav-menu">
          <li className={classNameA} onClick={ (event) => this.props.click(event, 'about')}>
            <a className="nav-link">Pokedex</a>
          </li>
          <li className={classNameT} onClick={ (event) => this.props.click(event, 'try')}>
            <a className="nav-link">Try it out !</a>
          </li>
          <li className={classNameH} onClick={ (event) => this.props.click(event, 'how')}>
            <a className="nav-link">How it was done</a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Navbar