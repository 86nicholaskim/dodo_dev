import React from "react";

import styled from "styled-components";
import Icon from "./Icon";

const LoadingScreenDiv = styled.div`
  position: fixed;
  z-index: 2000;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: "#fff";
  .fade_out {
    opacity: 0;
    transition: opacity 225ms cubic-bezier(0.4, 0, 1, 1) 0.15s;
    .loading_screen--spinner {
      opacity: 0;
      transition: opacity 0.15s cubic-bezier(0.4, 0, 1, 1);
    }
  }
`;

const LoadingScreenLoaderDiv = styled.div`
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SvgLogo = styled(Icon)`
  height: 64px;
  width: 64px;
  display: flex;
  margin-bottom: 32px;
`;

const SvgSpinner = styled(Icon)`
  width: 24px;
  height: 24px;
  position: relative;

  -webkit-animation-name: circular-spinner;
  animation-name: circular-spinner;
  -webkit-animation-duration: 1.2s;
  animation-duration: 1.2s;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
`;

interface LoadingScreenProps {
  logoColor?: string;
  ringThumbColor?: string;
}

function LoadingScreen({ logoColor, ringThumbColor }: LoadingScreenProps) {
  const logoColorFill = logoColor || "#E44332";
  const ringThumbFill = ringThumbColor || "#E44332";

  return (
    <LoadingScreenDiv>
      <LoadingScreenLoaderDiv className="loading_screen--loader">
        <SvgLogo>
          <g fill="none" fillRule="evenodd">
            <path
              className="logo_bg"
              d="M56.000016 0h-48c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V8c0-4.4-3.6-8-8-8"
              fill={logoColorFill}
            ></path>
            <g className="logo_stripe" fill="#FFF">
              <path
                d="M13.672368 29.985936c1.1304-.65152 25.34368-14.58496 25.89952-14.90592.5544-.32016.58224-1.30224-.03824-1.65632-.62096-.35408-1.79984-1.02368-2.23856-1.28048-.44656-.26048-1.24976-.40528-1.99472.02384-.30928.1784-21.00256 12.0768-21.69424
                        12.46992-.82784.47072-1.85248.4768-2.67744-.0008-.65152-.37696-10.92864-6.3488-10.92864-6.3488v5.39712c2.66016 1.54912 9.2744 5.40128 10.87744 6.30624.95664.54016 1.87232.52688 2.79488-.0048"
              ></path>
              <path
                d="M13.672368 40.76952c1.1304-.65152 25.34368-14.58496 25.89952-14.90592.5544-.32.58224-1.30224-.03824-1.65632-.62096-.35408-1.79984-1.02368-2.23856-1.28048-.44656-.26048-1.24976-.40528-1.99472.02384-.30928.1784-21.00256 12.0768-21.69424
                        12.46992-.82784.47072-1.85248.4768-2.67744-.0008-.65152-.37696-10.92864-6.3488-10.92864-6.3488v5.39712c2.66016 1.54912 9.2744 5.40128 10.87744 6.30624.95664.54016 1.87232.52688 2.79488-.0048"
              ></path>
              <path
                d="M13.672368 51.55312c1.1304-.65152 25.34368-14.58496 25.89952-14.90592.5544-.32.58224-1.30224-.03824-1.65632-.62096-.35408-1.79984-1.02368-2.23856-1.28048-.44656-.26048-1.24976-.40528-1.99472.02384-.30928.1784-21.00256 12.0768-21.69424
                        12.46992-.82784.47072-1.85248.4768-2.67744-.0008-.65152-.37696-10.92864-6.3488-10.92864-6.3488v5.39712c2.66016 1.54912 9.2744 5.40128 10.87744 6.30624.95664.54016 1.87232.52688 2.79488-.0048"
              ></path>
            </g>
          </g>
        </SvgLogo>
        <SvgSpinner className="loading_screen--spinner">
          <g fill="none" fillRule="nonzero">
            <path
              className="ring_thumb"
              fill={ringThumbFill}
              d="M17.945 3.958A9.955 9.955 0 0 0 12 2c-2.19 0-4.217.705-5.865 1.9L5.131 2.16A11.945 11.945 0 0 1 12 0c2.59 0 4.99.82 6.95 2.217l-1.005 1.741z"
            ></path>
            <path
              className="ring_track"
              fill="#FCECEA"
              d="M5.13 2.16L6.136 3.9A9.987 9.987 0 0 0 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10a9.986 9.986 0 0 0-4.055-8.042l1.006-1.741A11.985 11.985 0 0 1 24 12c0 6.627-5.373 12-12 12S0 18.627 0 12c0-4.073 2.029-7.671 5.13-9.84z"
            ></path>
          </g>
        </SvgSpinner>
      </LoadingScreenLoaderDiv>
    </LoadingScreenDiv>
  );
}

export default LoadingScreen;

/*
, function(e, t) {
    e.exports = '<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="128pt" height="128pt" viewBox="0 0 128 128" preserveAspectRatio="xMidYMid meet">
    <g transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)" stroke="none">
    <path d="M588 1069 c-10 -5 -18 -19 -18 -29 0 -28 -39 -65 -89 -84 -39 -15 -46 -15 -67 -1 -33 21 -67 19 -91 -7 -33 -37 -34 -45 -17 -81 28 -59 -10 -167 -59 -167 -35 0 -47 -19 -47 -72 0 -38 4 -50 18 -54 64 -21 71 -27 93 -80 21 -54 21 -56 3 -89 -21 -40 -11 -73 31 -101 25 -16 28 -16 55 -1 38 23 67 21 119 -5 33 -17 47 -32 55 -58 11 -34 12 -35 65 -35 52 0 55 1 65 32 14 40 29 54 85 78 41 18 45 18 73 2 41 -24 60 -21 91 11 32 33 32 38 11 82 -14 27 -15 38 -4 72 13 47 51 88 78 88 30 0 44 24 40 72 -3 37 -7 45 -33 56 -55 24 -60 29 -82 83 -19 48 -20 56 -7 81 21 40 17 61 -14 91 -32 30 -48 33 -76 12 -27 -20 -48 -19 -107 6 -37 16 -51 28 -55 48 -4 14 -14 34 -22 44 -17 19 -67 22 -94 6z m108 -288 c155 -71 114 -301 -54 -301 -87 0 -150 53 -159 135 -10 82 28 143 104 170 50 18 60 18 109 -4z"/></g></svg>'
}
, function(e, t) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 128 128" enable-background="new 0 0 128 128" xml:space="preserve">
    <g>
    <g>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M103.199,39.9907 L98.8771,35.6692 L81.5177,18.3098 L77.1115,13.9036 L77.0491,13.8412 L77.0491,13.9036 L35.6369,13.9036 C29.6178,13.9036 24.739,18.7835 24.739,24.8015 L24.739,103.261 C24.739,109.28 29.6178,114.159 35.6369,114.159 L92.3007,114.159 C98.3198,114.159 103.199,109.28 103.199,103.261 L103.199,101.172 L98.8771,101.172 L98.8771,103.292 C98.8771,106.904 95.95,109.831 92.3386,109.831 L35.6257,109.831 C32.0143,109.831 29.0872,106.902 29.0872,103.292 L29.0872,24.8483 C29.0872,21.2368 32.0143,18.3098 35.6257,18.3098 L77.0491,18.3098 L77.0491,29.1552 C77.0491,35.1743 81.9279,40.0531 87.9469,40.0531 L98.8771,40.0531 L98.8771,61.9078 L103.199,61.9078 L103.199,40.0531 L103.261,40.0531 L103.199,39.9907 M77.0379,96.7905 L77.0379,66.2783 L72.6797,66.2783 L72.6797,66.3452 L68.3203,66.3452 L68.3203,66.2783 L63.961,66.2783 L63.961,96.7905 L68.3203,96.7905 L68.3203,83.6455 L72.6797,83.6455 L72.6797,96.7916 L77.0379,96.7916 L77.0379,96.7905 M68.3203,79.4222 L68.3203,70.5686 L72.6797,70.5686 L72.6797,79.4222 L68.3203,79.4222 M46.5247,66.2761 L46.5247,96.7927 L50.884,96.7927 L50.884,83.6478 L55.2434,83.6478 L55.2434,79.4244 L50.884,79.4244 L50.884,70.5708 L55.2434,70.5708 L55.2434,66.3452 L50.884,66.3452 L50.884,66.2772 L46.5247,66.2772 L46.5247,66.2761 M55.2434,79.3531 L59.6027,79.3531 L59.6027,70.6355 L55.2434,70.6355 L55.2434,79.3531 M59.6027,83.7146 L55.2434,83.7146 L55.2434,96.7916 L59.6027,96.7916 L59.6027,83.7146 M98.8347,96.7225 L98.8347,92.4322 L103.194,92.4322 L103.194,66.275 L98.8347,66.275 L98.8347,92.362 L94.4754,92.362 L94.4754,66.275 L90.116,66.275 L90.116,92.362 L85.7578,92.362 L85.7578,66.275 L81.3984,66.275 L81.3984,92.4311 L85.7366,92.4311 L85.7366,96.7214 L90.116,96.7214 L90.116,92.4311 L94.4553,92.4311 L94.4553,96.7214 L98.8347,96.7214 L98.8347,96.7225 Z"/>
    </g>
    </g>'
}
, function(e, t) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 128 128" enable-background="new 0 0 128 128" xml:space="preserve">
    <g fill-rule="evenodd" stroke="none" stroke-width="1">
    <g transform="translate(-511.000000, -465.000000)">
    <g transform="translate(511.500000, 465.000000)">
    <path d="M66.7414,31.6694 L83.4281,48.3562 L90.7286,41.0557 L66.7414,17.0685 L42.7542,41.0557 L50.0546,48.3562 L66.7414,31.6694 M66.7414,96.3306 L50.0546,79.6438 L42.7542,86.9443 L66.7414,110.931 L90.7286,86.9443 L83.4281,79.6438 L66.7414,96.3306 Z"/>
    </g></g>
    </g>
    </svg>'
}
*/

/* css 

.loading_screen {
    position: fixed;
    z-index: 2000;
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
    background-color: #fff
}

.loading_screen--loader {
    width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center
}

.loading_screen--logo {
    display: flex;
    margin-bottom: 32px
}

.loading_screen--spinner {
    position: relative;
    -webkit-animation-name: circular-spinner;
    animation-name: circular-spinner;
    -webkit-animation-duration: 1.2s;
    animation-duration: 1.2s;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear
}

.loading_screen.fade_out {
    opacity: 0;
    transition: opacity 225ms cubic-bezier(.4,0,1,1) .15s
}

.loading_screen.fade_out .loading_screen--spinner {
    opacity: 0;
    transition: opacity .15s cubic-bezier(.4,0,1,1)
}

*/
