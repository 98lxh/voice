import { reactive } from "vue";
import { useDebounceFn, tryOnMounted, tryOnUnmounted } from "@vueuse/core";

export interface IWindowSizeOptions {
  wait: number;
  immediate: boolean;
}

export type WindowSize = ReturnType<typeof useWindowSize>;

export function useWindowSize({ wait = 150, immediate }: IWindowSizeOptions) {
  const size = reactive({
    width: 0,
    height: 0
  });

  function handler() {
    const { innerWidth, innerHeight } = window;
    size.height = innerHeight;
    size.width = innerWidth;
  }

  const resizeHandler = useDebounceFn(handler, wait);

  const start = () => {
    if (immediate) handler();

    window.addEventListener("resize", resizeHandler);
  };

  const end = () => {
    window.removeEventListener("resize", resizeHandler);
  };

  tryOnMounted(() => start());

  tryOnUnmounted(() => end());

  return {
    end,
    size,
    start
  };
}
