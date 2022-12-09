import React from "react";
import { useRouter } from "next/router";
import {Animation} from "../../components/Animation";
import { getLayers } from "../../components/layers-manifest";
import { parse } from "../../layers-api/parse";


export async function getServerSideProps({ params, res, req }) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  const proto =req.headers["x-forwarded-proto"] || req.connection.encrypted
  ? "https"
  : "http";
  const layers = await parse(String(params.id), proto, req.headers.host);

  return {
    props: {
      layers,
    },
  };
}
export default function Index({ layers }) {
  return (
    <Animation layers={layers}/>
  )
}
