import React, { FC } from 'react'
import { Link } from 'react-router-dom';

const Ad: FC = () => (
  <div className="ad">
    <div className="ad__picture"></div>
    <div className="ad__action">
      <h2>A T-Shirt for every occasion</h2>
      <Link to="/catalog" className="button">Find Yours</Link>
    </div>
  </div>
)

export default Ad
