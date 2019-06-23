import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/card';

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>
          Dak Tengur
        </h1>
        <p>Just a quick go at building a React based portfolio</p>
        <Link to="/page-2/">Go to page 2</Link>
      </div>
    </div>
    <div className="CardGroup">
      <div className="Cards">
        <h2>Featured projects</h2>
        <Card
          title="Volo"
          role="Product Designer"
          image={require('../assets/png/home/img-home-coming-soon.png')}/>
        <Card
          title="Salve - App"
          role="UI/UX Designer"
          image={require('../assets/png/home/img-home-salve-app-reskin.png')}/>
        <Card
          title="Farmers Weekly"
          role="Product Designer"
          image={require('../assets/png/home/img-home-fwi.png')}/>
        <Card
          title="Salve"
          role="UI/X Designer"
          image={require('../assets/png/home/img-home-salve.png')}/>
        <Card
          title="Cisco eStore"
          role="UI/X Designer"
          image={require('../assets//png/home/img-home-estore.png')}/>
      </div>
    </div>
  </div>
)

export default IndexPage
