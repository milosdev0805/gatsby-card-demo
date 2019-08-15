import React from "react"
import { Link, navigate } from "gatsby"
import full_logo from "../branding/RT-Logo-Long-for-Web.png"
import logo_only from "../branding/ragan-icon.png"

class NavBar extends React.Component {
  constructor(props) {
    super(props);
      this.toggleNavbar = this.toggleNavbar.bind(this);
      this.state = {
        collapsed: true,
      };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  render() {
    const classBurgerMenu = (this.state.collapsed ? '' : 'is-active')

    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img className="logo" style={{width: '300px', height: 'auto', marginBottom: '0'}} src={full_logo} />
          </a>

          <a role="button" className={'navbar-burger burger ' + classBurgerMenu} aria-label="menu" aria-expanded="false" data-target="navMenu" onClick={this.toggleNavbar}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navMenu" className={'navbar-menu ' + classBurgerMenu}>
          <div className="navbar-start">
            <Link to="/" className="navbar-item">Home</Link>
    	    <Link to="/" className="navbar-item">Daily Meditation</Link>
    	    <Link to="/" className="navbar-item">Podcast</Link>
    	    <Link to="/" className="navbar-item">Blog</Link>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar
