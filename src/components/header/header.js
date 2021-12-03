import React from "react";
import "../header/header.css"

class Header extends React.Component {
   
  
    render() {
      return (
      <header>
          <div className={'section_header'}>
              <a href={'https://www.csd.ua/'} className={'site_logo'}>
              </a>
          </div>
      </header>
      )
    }
  }
  export default Header