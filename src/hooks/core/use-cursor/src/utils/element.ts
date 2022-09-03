import { Config } from "./../types";
import { Ref, unref } from "vue";
import { CursorElements } from "../types";
import { generatorModeName } from "./helper";

export function createCursorElement(
  el: HTMLElement,
  { mode, line }: Config
): CursorElements {
  const circle = document.getElementById("cursor-circle");
  const point = document.getElementById("cursor-point");

  const cursorCircle = !circle
    ? (document.createElement("div") as HTMLElement)
    : (circle as unknown as HTMLElement);

  const cursorPoint = !point
    ? (document.createElement("div") as HTMLElement)
    : (point as unknown as HTMLElement);

  const modeName = generatorModeName(mode);

  cursorCircle.id = "cursor-circle";
  cursorPoint.id = "cursor-point";

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

export function hasCursorElement() {
  const cursor = document.querySelector(".cursor-point");
  return !!cursor;
}
