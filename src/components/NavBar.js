import React from 'react';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.aboutRef = React.createRef();

    this.state = {
      x: 0,
      y: 0
    }
  }

  _onMouseEnter = (e) => {
    const width = this.aboutRef.current.clientWidth;
    const height = this.aboutRef.current.clientHeight;
    const oX = (Math.floor((e.nativeEvent.offsetX / width) * 40) - 20) * 1.5;
    const oY = (Math.floor((e.nativeEvent.offsetY / height) * 40) - 20);

    this.setState({
      x: oX,
      y: oY
    })
  }

  _onMouseMove = (e) => {
    const width = this.aboutRef.current.clientWidth;
    const height = this.aboutRef.current.clientHeight;
    const oX = (Math.floor((e.nativeEvent.offsetX / width) * 40) - 20) * 1.5;
    const oY = (Math.floor((e.nativeEvent.offsetY / height) * 40) - 20);

    this.setState({
      x: oX,
      y: oY
    })
  }

  _onMouseLeave = (e) => {
    this.setState({
      x: 0,
      y: 0
    })
  }

  render = () => {
    const {x, y} = this.state;
    const pStyle = {
      '--pX': x,
      '--pY': y
    }

    return (
      <>
        <nav id="navbar">
          <div className="navbar_section navbar_left">
            <div className="logo-container show-on-scroll">
              <a href="#welcome-section" className="logo show-on-scroll btn-flip" data-back="Web Developer" data-front="Daryl">Daryl</a>
            </div>
            <div className="about_link">
              <a 
                id="about_navbar" 
                className="hover-this" 
                href="#about_section"
                onMouseEnter={this._onMouseEnter}
                onMouseMove={this._onMouseMove}
                onMouseLeave={this._onMouseLeave}
                ref={this.aboutRef}
                style={pStyle}
              >
                  About Me
              </a>
            </div>
          </div>
          <div className="navbar_section navbar_right">
            <input type="checkbox" className="nav__cb" id="menu-cb"/>
            <div className="navbar_right-container">
              <a id="about-hide" className="projects_link projects_link-a" href="#about_section">
                  <span className="projects_link-text">About Me</span>
              </a>
              <a className="projects_link projects_link-b" href="#projects">
                  <span className="projects_link-text">Projects</span>
              </a>
              <a className="projects_link projects_link-c" href="#where">
                  <span className="projects_link-text">Contact</span>
              </a>
              </div>
              <label className="nav__btn" htmlFor="menu-cb"></label>
          </div>
        </nav>
      </>
    )
  }
}

export default NavBar;
