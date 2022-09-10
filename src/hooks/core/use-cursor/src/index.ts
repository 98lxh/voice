import { onMounted, ref } from "vue";
import { Config, CursorElements, CursorMode } from "./types";
import { createCursorElement, isVaildElement } from "./utils/element";
import { removeOtherMode, setCursorMode } from "./utils/mode";
import { bindEvent } from "./utils/event";
import { generatorHelper } from "./utils/helper";

import "./styles/index.scss";

export const defaultConfig: Config = {
  mode: "normal"
};

export function useCursor(config: Config = defaultConfig) {
  const container = ref<HTMLElement | null>(null);
  const cursorElements = ref<CursorElements | null>(null);

  function setCursor(mode: CursorMode) {
    const { circle, point } = cursorElements.value!;
    [circle, point].forEach(el => {
      removeOtherMode(el);
      setCursorMode(el, mode);
    });
  }

  function remove(){
    const { point } = cursorElements.value!;
    const firstEl = point.children[0];
    firstEl && cursorElements.value?.point.removeChild(firstEl)
  }

  function reset(){
    const { circle } = cursorElements.value!;
    circle.removeAttribute('style')
    setCursor('normal')
    remove();
  }

  function initialization(el: HTMLElement) {
    cursorElements.value = createCursorElement(el, config as Config);
    bindEvent(cursorElements.value);
  }

  onMounted(() => {
    initialization(isVaildElement(container));
  });

  return {
    helper: generatorHelper(setCursor, cursorElements),
    remove,
    reset,
    setCursor
  };
}
