import React from 'react';

const LoginIcon = ({
  width = 22,
  height = 23,
  fill = '#848282',
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.99998 0.666656C1.55795 0.666656 1.13403 0.842251 0.821468 1.15481C0.508908 1.46737 0.333313 1.8913 0.333313 2.33332V20.6667C0.333313 21.1087 0.508908 21.5326 0.821468 21.8452C1.13403 22.1577 1.55795 22.3333 1.99998 22.3333H14.5C14.721 22.3333 14.933 22.2455 15.0892 22.0892C15.2455 21.933 15.3333 21.721 15.3333 21.5C15.3333 21.279 15.2455 21.067 15.0892 20.9107C14.933 20.7545 14.721 20.6667 14.5 20.6667H1.99998V2.33332H14.5C14.721 2.33332 14.933 2.24553 15.0892 2.08925C15.2455 1.93297 15.3333 1.721 15.3333 1.49999C15.3333 1.27898 15.2455 1.06701 15.0892 0.910734C14.933 0.754454 14.721 0.666656 14.5 0.666656H1.99998ZM18.0066 7.15999C17.8502 7.00351 17.6379 6.9156 17.4166 6.9156C17.1954 6.9156 16.9831 7.00351 16.8266 7.15999C16.6702 7.31647 16.5823 7.5287 16.5823 7.74999C16.5823 7.97128 16.6702 8.18351 16.8266 8.33999L19.155 10.6667H7.83331C7.6123 10.6667 7.40034 10.7545 7.24406 10.9107C7.08778 11.067 6.99998 11.279 6.99998 11.5C6.99998 11.721 7.08778 11.933 7.24406 12.0892C7.40034 12.2455 7.6123 12.3333 7.83331 12.3333H19.155L16.8266 14.66C16.6702 14.8165 16.5823 15.0287 16.5823 15.25C16.5823 15.4713 16.6702 15.6835 16.8266 15.84C16.9831 15.9965 17.1954 16.0844 17.4166 16.0844C17.6379 16.0844 17.8502 15.9965 18.0066 15.84L21.7566 12.09C21.8343 12.0126 21.8958 11.9206 21.9378 11.8194C21.9798 11.7181 22.0015 11.6096 22.0015 11.5C22.0015 11.3904 21.9798 11.2818 21.9378 11.1806C21.8958 11.0794 21.8343 10.9874 21.7566 10.91L18.0066 7.15999V7.15999Z"
      fill={fill}
    />
  </svg>
);

export default LoginIcon;