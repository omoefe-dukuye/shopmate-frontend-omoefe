declare module 'react-animated-burgers' {
  import React, { Component } from 'react'

  export class HamburgerArrow extends Component<{
    barColor: string,
    buttonWidth: number,
    isActive: boolean,
    toggleButton(): void,
    className: string,
  }>{}
}
