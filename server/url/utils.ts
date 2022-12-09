import { NextApiRequest } from "next/types";

export function getProtocol(req: NextApiRequest) {
  const proto = req.headers["x-forwarded-proto"] ? "https" : "http";

  return proto;
}
