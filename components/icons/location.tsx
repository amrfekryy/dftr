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

export const LocationMobileIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  width = 5,
  height = 8,
  fill = "currentColor",
  className = "",
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 5 8"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M2.77261 4.01616C3.12463 4.01616 3.46223 3.87632 3.71114 3.6274C3.96006 3.37849 4.0999 3.04089 4.0999 2.68887C4.0999 2.33685 3.96006 1.99924 3.71114 1.75033C3.46223 1.50141 3.12463 1.36157 2.77261 1.36157C2.42059 1.36157 2.08298 1.50141 1.83407 1.75033C1.58515 1.99924 1.44531 2.33685 1.44531 2.68887C1.44531 3.04089 1.58515 3.37849 1.83407 3.6274C2.08298 3.87632 2.42059 4.01616 2.77261 4.01616ZM2.77261 4.01616V7.99804"
        stroke="#707070"
        stroke-width="0.936913"
      />
    </svg>
  );
};
