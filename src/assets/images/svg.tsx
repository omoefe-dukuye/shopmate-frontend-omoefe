import * as React from 'react'
import { IOnClick } from '../../types'

interface ISvg {
  color ?: number
}

const getColor = (color: number): string => {
  switch (color) {
    case 1:
      return '#F62F5E'
    case 2:
      return '#2E2E2E'
    default:
      return '#FFF'
  }
}

export const SearchIcon: React.FC<IOnClick & ISvg> = ({ onClick, color = 1 }) => (
  <svg
    className="search-icon"
    width="2rem"
    onClick={onClick}
    height="2rem"
    viewBox="0 0 17 17"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>icons/search/black</title>
    <desc>Created with Sketch.</desc>
    <g id="sample-pages" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Web-1" transform="translate(-889.000000, -30.000000)">
            <g id="topbar">
                <g id="icons" transform="translate(887.000000, 14.000000)">
                    <g id="icons/search/black" transform="translate(0.000000, 14.000000)">
                        <rect id="bounds" x="0" y="0" width="20" height="20"></rect>
                        <path
                          d="M14.0829614,13.9876817 L17.5770458,17.4817661"
                          id="line"
                          stroke={getColor(color)}
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fillRule="nonzero"
                        />
                        <circle
                          id="Oval"
                          stroke={getColor(color)}
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          cx="9"
                          cy="9"
                          r="6"
                        />
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>
)

export const CloseIcon: React.FC<IOnClick & ISvg> = ({ onClick, color = 1 }) => (
  <svg
    width="1.2rem"
    height="1.2rem"
    viewBox="0 0 8 8"
    onClick={onClick}
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
   >
    <title>icons/close/small/white</title>
    <desc>Created with Sketch.</desc>
    <g id="sample-pages" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Web-2" transform="translate(-878.000000, -83.000000)">
            <g id="topbar/black/4" transform="translate(0.000000, 49.000000)">
                <g id="search" transform="translate(642.000000, 20.000000)">
                    <g id="icons/close/small/white" transform="translate(230.000000, 8.000000)">
                        <rect id="bounds" x="0" y="0" width="20" height="20"></rect>
                        <path
                          d="M7,7 L12.6568542,12.6568542"
                          id="line"
                          stroke={getColor(color)}
                          strokeWidth="2"
                          strokeLinecap="round"
                          fillRule="nonzero"
                        ></path>
                        <path
                          d="M7,7 L12.6568542,12.6568542"
                          id="line"
                          stroke={getColor(color)}
                          strokeWidth="2"
                          strokeLinecap="round"
                          fillRule="nonzero"
                          transform="translate(9.828427, 9.828427) scale(-1, 1) translate(-9.828427, -9.828427) "
                        ></path>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>
)


export const BagIcon: React.FC<IOnClick & ISvg> = ({ color = 1 }) => (
  <svg
    width="3rem"
    height="3rem"
    viewBox="0 0 18 18"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>icons/bag/black</title>
    <desc>Created with Sketch.</desc>
    <g id="sample-pages" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Web-1" transform="translate(-937.000000, -29.000000)">
            <g id="topbar">
                <g id="icons" transform="translate(887.000000, 14.000000)">
                    <g id="icons/bag/black" transform="translate(49.000000, 14.000000)">
                        <rect id="bounds" x="0" y="0" width="20" height="20"></rect>
                        <path
                          d={`
                            M3.96475885,8
                            C3.41443235,8
                            2.92175355,8.44259056
                            2.8636101,8.99539757
                            L2.0212135,17.0046024
                            C1.96339234,17.5543453
                            2.36554654,18
                            2.91509367,18
                            L17.0761576,18
                            C17.6276552,18
                            18.0320933,17.5443356
                            17.9815876,17.0046024
                            L17.2321232,8.99539757
                            C17.1806808,8.44565467
                            16.6993393,8
                            16.1425242,8
                            L3.96475885,8
                            Z
                          `}
                          id="Path"
                          stroke={getColor(color)}
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                         />
                        <path d={`
                          M6,9.98587388
                          L6.0150561,6.00941836
                          C6.02342022,3.80037684
                          7.81877921,2.00712961
                          10.0384492,2.00407018
                          L9.99175144,2.00413454
                          C12.205446,2.00108334
                          14,3.79641309
                          14,6.00406188
                          L14,10.0095139
                          `}
                          id="Path"
                          stroke={getColor(color)}
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                    </g>
                </g>
            </g>
        </g>
    </g>
  </svg>
)
