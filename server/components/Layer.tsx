import React from "react";
import { useMemo, useRef } from "react";
export interface Dimensions {
  width: number;
  height: number;
}

export interface LayerMeta {
  name: string;
  url: string;
  dimensions: Dimensions;
}

export interface LayerProps {
  image: LayerMeta;
}

export function Layer({ image }: LayerProps) {
  const layerRef = useRef<HTMLDivElement>(null);

  const layerStyle = useMemo(
    () => ({
      position: "absolute",
      backgroundImage: `url(${image.url})`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      width: "100%",
      height: "100vh",
    }),
    [image.url]
  );

  return (
    <div
      className="layer"
      ref={layerRef}
      style={layerStyle as React.CSSProperties}
    ></div>
  );
}
