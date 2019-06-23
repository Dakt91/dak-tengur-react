import React from 'react'
import Link from 'gatsby-link'
import './header.css'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false
    }
  }
  
  componentDidMount() {
    window.addEventListener('scroll', 
    this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true})
    }
    else {
      this.setState ({ hasScrolled: false})
    }
  }
  
  render() {
    return (
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup">
          <Link to="/"><img src={require('../assets/svg/svg-dt-avatar.svg')} width="64"/></Link>
          <Link to="/Portfolio">Portfolio</Link>
          <Link to="/About">About</Link>
          <Link to="/GetinTouch">
            <button>Get in touch</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Header