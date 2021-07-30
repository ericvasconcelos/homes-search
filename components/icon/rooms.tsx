import { FunctionComponent } from 'react';

const Rooms: FunctionComponent = ({ ...rest }): JSX.Element => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <circle cx="12" cy="11" r="0.5" stroke="#022B54" />
      <path d="M17 17.5H5" stroke="#022B54" />
      <path d="M14.5 18V6.5H7.5V18" stroke="#022B54" />
    </svg>
  );
};

export default Rooms;
