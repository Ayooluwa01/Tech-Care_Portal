import Image, { StaticImageData } from "next/image";
import { memo } from "react";

interface IconProps {
  src: string | StaticImageData;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export const Icon = memo(
  ({ src, alt, width, height, className }: IconProps) => {
    return (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority
        className={`object-contain ${className || ""}`}
      />
    );
  },
);

Icon.displayName = "Icon";
