import { ImgHTMLAttributes, useEffect, useState } from "react";

type SafeImgProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  src: string;
  /** Called when the image fails to load */
  onHardError?: (badSrc: string) => void;
};

export default function SafeImg({ src, onHardError, ...imgProps }: SafeImgProps) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    setHidden(false);
  }, [src]);

  if (hidden) return null;

  return (
    <img
      {...imgProps}
      src={src}
      onError={(e) => {
        imgProps.onError?.(e);
        setHidden(true);
        onHardError?.(src);
      }}
    />
  );
}
