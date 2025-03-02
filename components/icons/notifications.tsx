import React from "react";

export const NotificationsIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
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
      viewBox="0 0 36 36"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M26.9607 11.6667C26.9607 9.3461 26.0388 7.12051 24.3979 5.47956C22.7569 3.83862 20.5313 2.91675 18.2107 2.91675C15.89 2.91675 13.6645 3.83862 12.0235 5.47956C10.3826 7.12051 9.46069 9.3461 9.46069 11.6667C9.46069 21.8751 5.08569 24.7917 5.08569 24.7917H31.3357C31.3357 24.7917 26.9607 21.8751 26.9607 11.6667Z"
        stroke="#E6E6E6"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20.7336 30.625C20.4772 31.067 20.1092 31.4339 19.6664 31.6889C19.2236 31.9439 18.7216 32.0782 18.2107 32.0782C17.6997 32.0782 17.1977 31.9439 16.7549 31.6889C16.3121 31.4339 15.9441 31.067 15.6877 30.625"
        stroke="#E6E6E6"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const NotificationsMobileIcon: React.FC<
  React.SVGProps<SVGSVGElement>
> = ({
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
        d="M14.0066 6.47841C14.0066 5.25362 13.52 4.079 12.654 3.21295C11.7879 2.3469 10.6133 1.86035 9.38851 1.86035C8.16372 1.86035 6.9891 2.3469 6.12305 3.21295C5.257 4.079 4.77045 5.25362 4.77045 6.47841C4.77045 11.8661 2.46143 13.4055 2.46143 13.4055H16.3156C16.3156 13.4055 14.0066 11.8661 14.0066 6.47841Z"
        stroke="#7D7D7D"
        stroke-width="1.31944"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.72 16.4841C10.5847 16.7174 10.3905 16.911 10.1568 17.0456C9.92312 17.1802 9.65818 17.2511 9.3885 17.2511C9.11882 17.2511 8.85388 17.1802 8.62019 17.0456C8.3865 16.911 8.19228 16.7174 8.05696 16.4841"
        stroke="#7D7D7D"
        stroke-width="1.31944"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
