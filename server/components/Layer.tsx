import Image from "next/image";
import React from "react";
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
  return (
    <div className="layer">
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
