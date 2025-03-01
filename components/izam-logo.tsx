import React from "react";

interface IzamLogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

export function IzamLogo(props: IzamLogoProps) {
  return <img src="/izam.svg" alt="Logo" width={100} height={100} {...props} />;
}
