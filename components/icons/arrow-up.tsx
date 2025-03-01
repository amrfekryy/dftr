import React from "react";

export const ArrowUpIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
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
        d="M12.42 8.04801L13.48 6.98701L7.70301 1.20801C7.61044 1.11486 7.50037 1.04093 7.37912 0.990482C7.25787 0.940034 7.12784 0.914062 6.99651 0.914062C6.86518 0.914062 6.73515 0.940034 6.6139 0.990482C6.49265 1.04093 6.38258 1.11486 6.29001 1.20801L0.51001 6.98701L1.57001 8.04701L6.99501 2.62301L12.42 8.04801Z"
        fill="black"
      />
    </svg>
  );
};
