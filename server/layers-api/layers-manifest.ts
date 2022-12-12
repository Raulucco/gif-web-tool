import manifest from './layers.json';

export type ManifestType = Array<{ layers: string[] }>;

function getManifestEntry(id: string) {
  return manifest[Number(id) - 1];
}

export const getLayers = (id: string) => {
  return getManifestEntry(id)?.layers ?? [];
};
