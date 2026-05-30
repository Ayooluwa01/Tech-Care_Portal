import React from "react";

interface TextProps {
  children: React.ReactNode;
  variant: "title" | "body" | "caption" | "metric" | "nav";
  //   weight?: "300" | "400" | "500" | "600" | "700" | "800" | "900";
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
}

const variantStyles = {
  title: "text-[24px] text-[#07263E] tracking-normal leading-tight",

  body: "text-[14px] text-[#072635] tracking-normal leading-relaxed",

  caption: "text-[12px] text-[#707070] tracking-normal leading-normal",

  metric: "text-[30px] text-[#07263E] tracking-tight leading-none",

  nav: "text-[14px] tracking-normal leading-none",
};

// const defaultWeights = {
//   title: "700",
//   body: "400",
//   caption: "400",
//   metric: "800",
//   nav: "500",
// };
export function Text({
  children,
  variant,
  //   weight,
  className = "",
  as: Component = "span",
}: TextProps) {
  //   const selectedWeight = weight || defaultWeights[weight];

  return (
    <Component
      className={`${variantStyles[variant]} ${className}`}
      //   style={{ fontWeight: selectedWeight }}
    >
      {children}
    </Component>
  );
}
