import React from "react";
import { Layer, LayerMeta } from "../../components/Layer";
import { parse } from "../../layers-api/parse";

export async function getServerSideProps({ params, res, req }) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  const proto =
    req.headers["x-forwarded-proto"] || req.connection.encrypted
      ? "https"
      : "http";
  const layers = await parse(String(params.id), proto, req.headers.host);

  return {
    props: {
      layers,
    },
  };
}

export default function Thumbnail({ layers }) {
  return (
    <div
      className="thumbnail-canvas"
      style={{
        position: "relative",
        width: "100%",
        height: "calc(100vh - 16px)",
        overflow: "hidden",
      }}
    >
      {layers.map((layer: LayerMeta, i: number) => {
        return <Layer key={`${layer.name}_${i}`} image={layer} isThumbnail />;
      })}
    </div>
  );
}
