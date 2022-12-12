import Image from "next/image";
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
  const layerRef = useRef<HTMLDivElement>();

  const layerStyle = useMemo(
    () => ({
      position: "absolute",
      width: "100%",
      height: "100vh",
    }),
    [image.url]
  );

  return (
    <div style={layerStyle as React.CSSProperties}>
      <Image
        className="layer"
        src={image.url}
        alt={image.name}
        layout="fill"
        objectFit="contain"
        placeholder="empty"
      />
    </div>
  );
}
