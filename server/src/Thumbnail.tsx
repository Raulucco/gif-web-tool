import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimationProps, Animation } from "./Animation";

const DefaultExtension = "png";

function useThumbnail(imgUrl: string) {
  const image = useRef(new Image());
  const [imageDidLoad, setImageDidLoad] = useState(false);
  const onImageLoad = useCallback(() => {
    setImageDidLoad(true);
  }, [setImageDidLoad]);

  useEffect(() => {
    image.current.onload = onImageLoad;
    image.current.onerror = onImageLoad;
    image.current.src = imgUrl;
  }, [imgUrl, onImageLoad]);

  return useMemo<string>(() => {
    const { width, height } = image.current;

    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    canvas.getContext("2d")?.drawImage(image.current, 0, 0, width, height);

    const extractExtension = () => {
      const [, match] = image.current.src.match(/\.([^\.]+)$/) ?? [
        undefined,
        DefaultExtension,
      ];
      return match;
    };
    try {
      return canvas.toDataURL(`image/${extractExtension()}`);
    } catch {
      return "";
    }
  }, [image.current, imageDidLoad]);
}

export function Thumbnail(props: AnimationProps) {
  const background = useThumbnail(props.background);
  const foreground = useThumbnail(props.foreground);
  const logo = useThumbnail(props.logo);

  return (
    <Animation background={background} foreground={foreground} logo={logo} />
  );
}
