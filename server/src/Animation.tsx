import { Layer } from "./Layer";

export type AnimationProps = {
  background: string;
  foreground: string;
  logo: string;
  width?: number;
  height?: number;
};

export function Animation({ background, foreground, logo }: AnimationProps) {
  // useEffect(() => {
  // TODO: display loading gif until all gifs are rendered
  // });

  return (
    <div className="canvas">
      <Layer
        image={{
          url: background,
        }}
      />
      <Layer
        image={{
          url: logo,
        }}
      />
      <Layer
        image={{
          url: foreground,
        }}
      />
    </div>
  );
}
