import React from "react";

type Props = {
  height: any;
  width: any;
  blur: any;
  opacity: any;
  boxShadow: any;
  background: any;
  border: any;
  children: any;
};

export default function Glassy({
  height = "100%",
  width = "100%",
  blur = "50px",
  opacity = "1",
  boxShadow = " 0 8px 32px 0 rgba(0,0,0,0.37)",
  background = " linear-gradient(135deg ,rgba(255,255,255,0.1),rgba(255,255,255,0))",
  border = "1px solid  rgba(255,255,255,0.18)",
  children,
}: Props) {
  return (
    <div
      style={{
        background: background,
        backdropFilter: `blur(${blur})`,
        borderRadius: "20px",
        border: border,
        boxShadow: boxShadow,
        height: height,
        width: width,
        opacity: opacity,
      }}
    >
      {children}
    </div>
  );
}
