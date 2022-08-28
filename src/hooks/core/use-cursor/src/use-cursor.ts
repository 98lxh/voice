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

  function setMode(mode: CursorMode) {
    const { circle, point } = cursorElements.value!;
    [circle, point].forEach(el => {
      removeOtherMode(el);
      setCursorMode(el, mode);
    });
  }

  function initialization(el: HTMLElement) {
    cursorElements.value = createCursorElement(el, config as Config);
    bindEvent(cursorElements.value);
  }

  onMounted(() => {
    initialization(isVaildElement(container));
  });

  return {
    helper: generatorHelper(setMode, cursorElements),
    container,
    setMode
  };
}
