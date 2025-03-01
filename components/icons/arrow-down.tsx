import React from "react";

export const ArrowDownIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  width = 14,
  height = 9,
  fill = "currentColor",
  className = "",
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 9"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M1.57999 0.951987L0.519991 2.01299L6.29699 7.79199C6.38956 7.88514 6.49963 7.95907 6.62088 8.00952C6.74213 8.05997 6.87216 8.08594 7.00349 8.08594C7.13482 8.08594 7.26485 8.05997 7.3861 8.00952C7.50735 7.95907 7.61742 7.88514 7.70999 7.79199L13.49 2.01299L12.43 0.952987L7.00499 6.37699L1.57999 0.951987Z"
        fill="black"
      />
    </svg>
  );
};
