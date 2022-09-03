import { nextTick, Ref } from "vue";
import { CursorElements, CursorMode, SetModeFn } from "./../types";

export function generatorModeName(mode?: CursorMode) {
  return mode ? `mode-${mode}` : "";
}

export function generatorHelper(
  setMode: SetModeFn,
  cursorElements: Ref<CursorElements | null>
) {
  const point = {
    onMouseenter: () => setMode("point"),
    onMouseleave: () => setMode("normal")
  };

  const arrow = {
    onMouseenter: () => setMode("arrow"),
    onMouseleave: () => setMode("normal")
  };

  const element = (element: HTMLElement | null) => {
    return {
      onMouseenter: () => {
        const { point, circle } = cursorElements.value!;
        if (!element) return console.log("请传入一个合法的html元素");
        const move = element.firstChild! as HTMLElement;

        if (move) {
          const { width } = move.getBoundingClientRect();
          setMode("element");
          point.appendChild(move);

          nextTick(() => {
            circle.style.width = width + 20 + "px";
            circle.style.height = width + 20 + "px";
          });
        }
      },
      onMouseleave: () => {
        console.log(1111);
        const { point, circle } = cursorElements.value!;
        if (!element) return console.log("请传入一个合法的html元素");
        const move = point.lastChild!;
        if (move) {
          circle.removeAttribute("style");

          circle.style.left = "-10000px";
          circle.style.top = "-10000px";

          element.appendChild(move);
          nextTick(() => setMode("normal"));
        }
      }
    };
  };

  return {
    point,
    arrow,
    element
  };
}
