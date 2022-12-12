import { LayerMeta } from "../components/Layer";
import { getLayers } from "./layers-manifest";
import sizeOf from "buffer-image-size";

export async function parse(id: string, protocol: string, host: string) {
  const layersUrl = getLayers(id);
  const layers = await Promise.all<LayerMeta>(
    layersUrl.map(async (url: string) => {
      const data = await fetch(`${protocol}://${host}/${url}`);
      const blob = await data.blob();

      const arraybuffer = await blob.arrayBuffer();
      const img = Buffer.from(arraybuffer);
      const { width, height } = sizeOf(img);

      return {
        name: url,
        url: `data:image/${url.split('.').pop()};base64,${img.toString('base64')}`,
        dimensions: {
          width,
          height,
        },
      } as LayerMeta;
    })
  );
  return layers;
}
