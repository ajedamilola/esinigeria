import React from "react";

export default function Wave({ fill = "white", rotation = "0deg", t = 1 }) {
  var wave = "";
  switch (t) {
    case 1:
      wave = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill={fill}
            fill-opacity="1"
            d="M0,32L60,48C120,64,240,96,360,128C480,160,600,192,720,192C840,192,960,160,1080,122.7C1200,85,1320,43,1380,21.3L1440,0L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      );
      break;
    case 2:
      wave = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill={fill}
            fill-opacity="1"
            d="M0,128L34.3,160C68.6,192,137,256,206,266.7C274.3,277,343,235,411,197.3C480,160,549,128,617,128C685.7,128,754,160,823,149.3C891.4,139,960,85,1029,74.7C1097.1,64,1166,96,1234,112C1302.9,128,1371,128,1406,128L1440,128L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
          ></path>
        </svg>
      );
      break;
    case 3:
      wave = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill={fill}
            fill-opacity="1"
            d="M0,128L34.3,160C68.6,192,137,256,206,266.7C274.3,277,343,235,411,197.3C480,160,549,128,617,128C685.7,128,754,160,823,149.3C891.4,139,960,85,1029,74.7C1097.1,64,1166,96,1234,112C1302.9,128,1371,128,1406,128L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          ></path>
        </svg>
      );
      break;
    case 4:
      wave = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill={fill} fill-opacity="1" d="M0,224L60,208C120,192,240,160,360,154.7C480,149,600,171,720,186.7C840,203,960,213,1080,208C1200,203,1320,181,1380,170.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
      );
      break;
    case 5:
      wave = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill={fill}
            fill-opacity="1"
            d="M0,224L60,208C120,192,240,160,360,154.7C480,149,600,171,720,186.7C840,203,960,213,1080,208C1200,203,1320,181,1380,170.7L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      );
      break;
    default:
      <svg></svg>;
      break;
  }
  return wave;
}
