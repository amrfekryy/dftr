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
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
