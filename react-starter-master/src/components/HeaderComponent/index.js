import React from "react"
import "./style.css"

class Header extends React.Component {

  render() {
    return (
      <div className="wrapper">
        <div className="header-container">
          <div className="header-container-left">
            <div className="header-logo">
              <img src="./../assets/comprend-logo-transparent.png" alt="Comprend logo" />
            </div>
          </div>
          <div className="header-container-right">
            <a href="#">Our Services<i className="fas fa-angle-down" />
            </a>
            <a href="#">Blog</a>
            <a href="#">Webranking</a>
            <a href="#">Join us</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
