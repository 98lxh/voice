import { useCursor } from ".";

export type CursorElements = {
  circle: HTMLElement;
  point: HTMLElement;
};

export type CursorMode = "point" | "normal" | "arrow" | "element";

export type SetModeFn = (mode: CursorMode) => void;

export type Config = Partial<{
  mode: CursorMode;
  line: boolean;
}>;

export type Cursor = ReturnType<typeof useCursor>;
