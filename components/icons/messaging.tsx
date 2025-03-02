import React from "react";

export const MessagingIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  width = 30,
  height = 30,
  fill = "currentColor",
  className = "",
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 30 30"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M24.2107 16.75C24.2107 17.413 23.9473 18.0489 23.4785 18.5178C23.0096 18.9866 22.3737 19.25 21.7107 19.25H6.71069L1.71069 24.25V4.25C1.71069 3.58696 1.97409 2.95107 2.44293 2.48223C2.91177 2.01339 3.54765 1.75 4.21069 1.75H21.7107C22.3737 1.75 23.0096 2.01339 23.4785 2.48223C23.9473 2.95107 24.2107 3.58696 24.2107 4.25V16.75Z"
        stroke="#E6E6E6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const MessagingMobileIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  width = 18,
  height = 18,
  fill = "none",
  className = "",
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M13.4173 9.26533C13.4173 9.62669 13.2737 9.97325 13.0182 10.2288C12.7627 10.4843 12.4161 10.6278 12.0548 10.6278H3.87978L1.15479 13.3528V2.45283C1.15479 2.09147 1.29833 1.74492 1.55385 1.4894C1.80937 1.23388 2.15593 1.09033 2.51728 1.09033H12.0548C12.4161 1.09033 12.7627 1.23388 13.0182 1.4894C13.2737 1.74492 13.4173 2.09147 13.4173 2.45283V9.26533Z"
        stroke="#7D7D7D"
        strokeWidth="1.09"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
