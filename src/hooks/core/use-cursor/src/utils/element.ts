import { Config } from "./../types";
import { Ref, unref } from "vue";
import { CursorElements } from "../types";
import { generatorModeName } from "./helper";

export function createCursorElement(
  el: HTMLElement,
  { mode, line }: Config
): CursorElements {
  const cursorCircle = document.createElement("div") as HTMLElement;
  const cursorPoint = document.createElement("div") as HTMLElement;

  const modeName = generatorModeName(mode);

  cursorCircle.className = `cursor-circle ${modeName}`;
  cursorPoint.className = `cursor-point ${modeName} ${line && "cursor-line"}`;

  el.appendChild(cursorPoint);
  el.appendChild(cursorCircle);

  return {
    circle: cursorCircle,
    point: cursorPoint
  };
}

export function isVaildElement(containerRef: Ref<HTMLElement | null>) {
  const container = unref(containerRef);
  return container ? container : document.body;
}
