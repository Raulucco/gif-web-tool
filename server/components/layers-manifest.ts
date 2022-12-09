export const manifest = {
  1: {
    layers: ['assets/background.png', 'assets/foreground.gif', 'assets/logo.png'],
  },
};

export type ManifestType = typeof manifest;

function getManifestEntry(id: string) {
  return manifest[Number(id) as keyof ManifestType];
}

export const getLayers = (id: string) => {
  return getManifestEntry(id)?.layers ?? [];
};
