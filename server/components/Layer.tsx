import React from "react";
import { useMemo, useRef } from "react";

export interface Dimensions {
  width: number;
  height: number;
}

export interface LayerMeta {
  name: string,
  url: string;
  dimensions: Dimensions;
}

export interface LayerProps {
  image: LayerMeta;
  isThumbnail?: boolean;
}

export function Layer({ image, isThumbnail = false }: LayerProps) {
  const layerRef = useRef<HTMLDivElement>(null);

  const layerStyle = useMemo(
    () => ({
      position: 'absolute',
      backgroundImage: `url(${image.url})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      width: isThumbnail ? '100%' : `${image.dimensions.width}px`,
      height: isThumbnail ? '100vh' :`${image.dimensions.height}px`,
    }),
    [image.url, isThumbnail]
  );
  return <div className="layer" ref={layerRef} style={layerStyle as React.CSSProperties}></div>;
}
