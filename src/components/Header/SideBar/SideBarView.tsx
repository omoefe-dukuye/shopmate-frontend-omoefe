import React, { FC } from 'react'
import { HamburgerArrow } from 'react-animated-burgers'

const SideBarView: FC = () => {
  const { useState } = React
  const [isActive, setAtiveState] = useState(false)
  return (
    <HamburgerArrow
      isActive={isActive}
      toggleButton={() => setAtiveState(!isActive)}
      barColor="#F62F5E"
      buttonWidth={30}
      className="hamburger"
    />
  )
}

export default SideBarView
