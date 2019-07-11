import React, { FC } from 'react'
import { Link } from 'react-router-dom'

const Logo: FC = () => (
  <Link className="logo" to="/">
    shopmate
  </Link>
)

export default Logo
