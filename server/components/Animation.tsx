import React, { useMemo } from "react";
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
      maxWidth: `${dimensions.width}px`,
      maxHeight: `${dimensions.height}px`,
    };
  }, [dimensions.width, dimensions.height]);

  return (
    <div className="flip-card">
      <div className={"flip-card-inner"}>
        <div className="flip-card-front">
          <div className="canvas" style={style as React.CSSProperties}>
            {layers.map((layer, i) => (
              <Layer key={`${layer.name}_${i}`} image={layer} />
            ))}
          </div>
        </div>
        <div className="flip-card-back">
          <div>
            <h1>Mixtapes vol. 6</h1>
            <h2>Prague - 13.12.2022</h2>
            <h3>I was there! 🎄</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
