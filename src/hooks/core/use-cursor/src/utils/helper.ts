import { nextTick, Ref } from "vue";
import { CursorElements, CursorMode, SetModeFn } from "./../types";

type ElementHandlerParams = {
  container: HTMLElement | null;
  cursorElements: Ref<CursorElements | null>;
  isLeave: boolean;
};

export function generatorModeName(mode?: CursorMode) {
  return mode ? `mode-${mode}` : "";
}

export function generatorHelper(
  setCursor: SetModeFn,
  cursorElements: Ref<CursorElements | null>
) {
  const point = {
    onMouseenter: () => setCursor("point"),
    onMouseleave: () => setCursor("normal")
  };

  const arrow = {
    onMouseenter: () => setCursor("arrow"),
    onMouseleave: () => setCursor("normal")
  };


  const input = {
    onMouseenter: () => setCursor("input"),
    onMouseleave: () => setCursor("normal")
  }

  const element = (container: HTMLElement | null) => {
    const enterHandler = elementHelperHandler.bind(null, {
      container,
      cursorElements,
      isLeave: false
    });

    const leaveHandler = elementHelperHandler.bind(null, {
      container,
      cursorElements,
      isLeave: true
    });

    return {
      onMouseenter: (event: MouseEvent) => {
        event.stopPropagation();
        enterHandler((move, icon) => {
          setCursor("element");
          const { point, circle } = cursorElements.value!;
          const { width } = move.getBoundingClientRect();
          if (icon) (move.firstChild as any).style.fill = "#000";

          point.appendChild(move);

          nextTick(() => {
            circle.style.width = width + 20 + "px";
            circle.style.height = width + 20 + "px";
          });
        });
      },
      onMouseleave: (event: MouseEvent) => {
        event.stopPropagation();
        leaveHandler((move, icon) => {
          const { circle } = cursorElements.value!;

          circle.removeAttribute("style");
          circle.style.left = "-10000px";
          circle.style.top = "-10000px";
          container!.appendChild(move);

          if (icon) (move.firstChild as any).style.fill = "#fff";

          nextTick(() => setCursor("normal"));
        });
      }
    };
  };

  return {
    point,
    arrow,
    input,
    element
  };
}

function elementHelperHandler(
  { container, isLeave, cursorElements }: ElementHandlerParams,
  handler: (move: HTMLElement, icon: boolean) => void
) {
  if (!container) return;
  const { point } = cursorElements.value!;

  const move = isLeave
    ? (point.lastChild! as HTMLElement)
    : (container.firstChild! as HTMLElement);

  const icon = !!move && move.tagName === "svg";
  move && handler(move, icon);
}
