import manifest from './layers.json';

export type ManifestType = Array<{ layers: string[] }>;

function getManifestEntry(id: string) {
  return manifest[Number(id)];
}

export const getLayers = (id: string) => {
  return getManifestEntry(id)?.layers ?? [];
};

// export const getThumbnail = (id: string) => {
//   return getManifestEntry(id)?.thumbnail ?? [];
// };
