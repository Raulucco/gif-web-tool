import { useMemo, useRef } from "react";

export interface LayerMeta {
  url: string;
  isBackground?: true;
  isForeGround?: true;
  isLogo?: true;
  dimensions?: {
    width: number;
    height: number;
  };
  offset?: {
    x: number;
    y: number;
  };
}

export interface LayerProps {
  image: LayerMeta;
}

const DefaultSize = 1080;

export function Layer({ image }: LayerProps) {
  const layerRef = useRef<HTMLDivElement>(null);
  const layerStyle = useMemo(
    () => ({
      backgroundImage: `url(${image.url})`,
      width: `${image.dimensions?.width ?? DefaultSize}px`,
      height: `${image.dimensions?.height ?? DefaultSize}px`,
    }),
    [image.url]
  );
  return <div className="layer" ref={layerRef} style={layerStyle}></div>;
}
