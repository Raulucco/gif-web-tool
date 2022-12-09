import React from "react";
import { useMemo } from "react";
import { Dimensions, Layer, LayerMeta } from "./Layer";

export type AnimationProps = {
  layers: LayerMeta[];
};

export function Animation({ layers }: AnimationProps) {
  const dimensions = useMemo<Dimensions>(() => {
    return layers.reduce(
      (acc: Dimensions, layer: LayerMeta) => {
        return {
          width: Math.max(acc.width, layer.dimensions.width),
          height: Math.max(acc.height, layer.dimensions.height),
        };
      },
      { width: 0, height: 0 }
    );
  }, layers);
  const style = useMemo(() => {
    return {
      position: "relative",
      width: dimensions.width,
      height: dimensions.height,
    };
  }, [dimensions.width, dimensions.height]);
  return (
    <div className="canvas" style={{ position: "relative" }}>
      {layers.map((layer, i) => (
        <Layer key={`${layer.name}_${i}`} image={layer} />
      ))}
    </div>
  );
}
