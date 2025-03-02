import React from "react";

export const LocationIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  width = 8,
  height = 16,
  fill = "currentColor",
  className = "",
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 8 16"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M3.97469 7.08329C4.72614 7.08329 5.44681 6.78478 5.97816 6.25343C6.50951 5.72208 6.80802 5.00141 6.80802 4.24996C6.80802 3.49851 6.50951 2.77784 5.97816 2.24649C5.44681 1.71514 4.72614 1.41663 3.97469 1.41663C3.22324 1.41663 2.50257 1.71514 1.97122 2.24649C1.43987 2.77784 1.14136 3.49851 1.14136 4.24996C1.14136 5.00141 1.43987 5.72208 1.97122 6.25343C2.50257 6.78478 3.22324 7.08329 3.97469 7.08329ZM3.97469 7.08329V15.5833"
        stroke="#707070"
        stroke-width="2"
      />
    </svg>
  );
};
