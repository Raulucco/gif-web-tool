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
      position: "relative",
      width: "calc(100% -16px)",
      height: "calc(100vh - 16px)",
      maxWidth: `${dimensions.width}px`,
      maxHeight: `${dimensions.height}px`,
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto",
    };
  }, [dimensions.width, dimensions.height]);

  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="canvas" style={style as React.CSSProperties}>
            {layers.map((layer, i) => (
              <Layer key={`${layer.name}_${i}`} image={layer} />
            ))}
          </div>
        </div>
        <div className="flip-card-back">
          <h1>John Doe</h1>
          <p>Architect & Engineer</p>
          <p>We love that guy</p>
        </div>
      </div>
    </div>
  );
}
