export const manifest = {
  1: {
    layers: ['assets/background.png', 'assets/foreground.gif', 'assets/logo.png'],
    thumbnail: "data:image/gif;base64,R0lGODlhCgAIAIABAN3d3f///yH5BAEAAAEALAAAAAAKAAgAAAINjAOnyJv2oJOrVXrzKQA7",
  },
};

export type ManifestType = typeof manifest;

function getManifestEntry(id: string) {
  return manifest[Number(id) as keyof ManifestType];
}

export const getThumbnail = (id: string) => {
  return getManifestEntry(id)?.thumbnail ?? "";
};

export const getLayers = (id: string) => {
  return getManifestEntry(id)?.layers ?? [];
};
