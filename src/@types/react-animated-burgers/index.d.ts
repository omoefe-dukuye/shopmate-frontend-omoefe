declare module 'react-animated-burgers' {
  import * as React from 'react'

  export class HamburgerArrow extends React.Component<{
    barColor: string,
    buttonWidth: number,
    isActive: boolean,
    toggleButton(): void,
    className: string,
  }>{}
}
