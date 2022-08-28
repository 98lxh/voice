import { CursorMode } from "./../types";

export function removeOtherMode(el: HTMLElement) {
  const classList = el.classList;
  classList.forEach(
    className => className.includes("mode") && el.classList.remove(className)
  );
}

export function setCursorMode(el: HTMLElement, mode: CursorMode) {
  const modeName = `mode-${mode}`;
  !el.className.includes(modeName) && el.classList.add(modeName);
}
