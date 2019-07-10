import * as React from 'react'
import { Link } from 'react-router-dom'

const Jumbotron: React.FC = () => (
  <div className="jumbotron--home-page">
    <div className="jumbotron--home-page__text">
      <h2>A collection of over a hundred T-shirts</h2>
      <Link to="/catalog" className="button button--reverse">View All</Link>
    </div>
  </div>
)

export default Jumbotron
