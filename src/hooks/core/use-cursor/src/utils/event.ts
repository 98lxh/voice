import { CursorElements } from "../types";

function cursormove({ circle, point }: CursorElements) {
  document.addEventListener("mousemove", event => {
    const { x, y } = event;
    point.style.top = y + "px";
    point.style.left = x + "px";

    setTimeout(() => {
      circle.style.top = y + "px";
      circle.style.left = x + "px";
    }, 100);
  });
}

function cursorleave({ circle, point }: CursorElements) {
  document.addEventListener("mouseleave", () => {
    circle.classList.remove("cursor-show");
    circle.classList.add("cursor-hidden");
    point.classList.remove("cursor-show");
    point.classList.add("cursor-hidden");
  });
}

function cursorenter({ circle, point }: CursorElements) {
  document.addEventListener("mouseenter", () => {
    circle.classList.remove("cursor-hidden");
    circle.classList.add("cursor-show");
    point.classList.remove("cursor-hidden");
    point.classList.add("cursor-show");
  });
}

function cursorclick({ circle, point }: CursorElements) {
  document.addEventListener("mousedown", () => {
    circle.classList.add("cursor-click");
    point.classList.add("cursor-click");

    setTimeout(() => {
      circle.classList.remove("cursor-click");
      point.classList.remove("cursor-click");
    }, 150);
  });
}

export function bindEvent(cursorElements: CursorElements) {
  cursorenter(cursorElements);
  cursorclick(cursorElements);
  cursorleave(cursorElements);
  cursormove(cursorElements);
}
