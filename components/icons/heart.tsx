import React from "react";

export const HeartIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  width = 22,
  height = 21,
  fill = "currentColor",
  className = "",
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 22 21"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M15.9902 0.982494C15.4308 0.982494 14.8923 1.08745 14.3748 1.29735C13.8574 1.50726 13.3784 1.78713 12.9378 2.13697C12.4973 2.48681 12.1022 2.88563 11.7525 3.33343C11.4029 3.79522 11.1162 4.26401 10.8924 4.73979C10.6687 4.26401 10.382 3.79522 10.0323 3.33343C9.68267 2.88563 9.28758 2.48681 8.84703 2.13697C8.40648 1.78713 7.92748 1.50726 7.41001 1.29735C6.89254 1.08745 6.35409 0.982494 5.79467 0.982494C5.01148 0.982494 4.27723 1.12943 3.59194 1.42329C2.90664 1.71716 2.30876 2.11948 1.79828 2.63025C1.28781 3.14102 0.885719 3.73924 0.592021 4.42493C0.298323 5.11062 0.151474 5.84529 0.151474 6.62893C0.151474 8.21022 0.508107 9.54661 1.22137 10.6381C1.93464 11.7436 2.82622 12.7931 3.89612 13.7867C4.96602 14.7802 6.12333 15.8228 7.36805 16.9143C8.62676 17.9918 9.80155 19.3142 10.8924 20.8815C11.9274 19.3282 13.0672 17.9988 14.3119 16.8933C15.5566 15.7878 16.7209 14.7313 17.8048 13.7237C18.8887 12.7162 19.8013 11.6666 20.5425 10.5751C21.2698 9.46965 21.6334 8.15424 21.6334 6.62893C21.6334 5.84529 21.4865 5.11062 21.1928 4.42493C20.8991 3.73924 20.497 3.14102 19.9866 2.63025C19.4761 2.11948 18.8782 1.71716 18.1929 1.42329C17.5076 1.12943 16.7734 0.982494 15.9902 0.982494Z"
        fill="#C4C3C3"
      />
    </svg>
  );
};
