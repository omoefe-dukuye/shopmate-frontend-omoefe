import React, { FC } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Catalog from '../components/Catalog'
import Footer from '../components/Footer'
import Header from '../components/Header/Header'
import HomePage from '../components/HomePage'


const AppRouter: FC = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/catalog" component={Catalog} />
    </Switch>
    <Footer />
  </BrowserRouter>
)

export default AppRouter
