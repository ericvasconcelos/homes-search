import { FunctionComponent } from 'react';

const Pool: FunctionComponent = ({ ...rest }): JSX.Element => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M9.5 15V8C9.5 7.17157 8.82843 6.5 8 6.5V6.5C7.17157 6.5 6.5 7.17157 6.5 8V8"
        stroke="#022B54"
      />
      <path
        d="M14.5 16V8C14.5 7.17157 13.8284 6.5 13 6.5V6.5C12.1716 6.5 11.5 7.17157 11.5 8V8"
        stroke="#022B54"
      />
      <path d="M14.5 11.5H9.5" stroke="#022B54" />
      <path
        d="M17.5 14.4995C17.5 14.4995 16.5 15.5005 14.5 15.5C12.5 15.4996 11.5 14.4995 9.5 14.5C7.5 14.5006 6.5 15.4995 6.5 15.4995"
        stroke="#022B54"
      />
      <path
        d="M17.5 16.5C17.5 16.5 16.5 17.501 14.5 17.5005C12.5 17.5001 11.5 16.5 9.5 16.5005C7.5 16.5011 6.5 17.5 6.5 17.5"
        stroke="#022B54"
      />
    </svg>
  );
};

export default Pool;
