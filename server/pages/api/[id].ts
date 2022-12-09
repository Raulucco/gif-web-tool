import { NextApiRequest, NextApiResponse } from "next/types";
import merger from "merge-base64";
import { parse } from "../../layers-api/parse";
import { getProtocol } from "../../url/utils";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const layers = await parse(
    String(req.query.id),
    getProtocol(req),
    String(req.headers.host)
  );

  const img = await merger(
    layers.map((layer) => layer.url.split(";base64,").pop()),
    { align: 'center' }
  );
  res.end(img);
}
