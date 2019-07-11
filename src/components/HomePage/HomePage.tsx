import React, { FC } from 'react'
import GridSection from './GridSection'
import Jumbotron from './Jumbotron'

const HomePage: FC = () => (
  <div className="home-page">
    <Jumbotron />
    <div className="content-wrapper">
      <GridSection />
    </div>
  </div>
)

export default HomePage
