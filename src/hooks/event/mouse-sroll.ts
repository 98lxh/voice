import { ref } from "vue";
import { tryOnMounted, tryOnUnmounted } from "@vueuse/core";

export interface MouceScrollConfig {
  frame: number;
}

const defaultOptions: MouceScrollConfig = {
  frame: 20
};

/**
 * TODO:检查越界
 */
export function useMouseSroll({ frame } = defaultOptions) {
  const target = ref<HTMLElement | null>(null);
  let animationTimes = 0;
  let step = 0;
  let raf = 0;

  const cancelPreviousRaf = () => {
    animationTimes = 0;
    raf && window.cancelAnimationFrame(raf);
  };

  function onScrollTo(target: HTMLElement, mode: "up" | "down") {
    if (animationTimes === frame) {
      animationTimes = 0;
      return cancelPreviousRaf();
    }

    const current = target!.scrollLeft;

    raf = requestAnimationFrame(() => {
      animationTimes++;
      const left = mode === "up" ? current - step : current + step;
      onScrollTo(target, mode);
      target.scrollTo({
        left
      });
    });
  }

  function scrollTo(left:number){
    target.value!.scrollTo({left})
  }

  function handler(event: any) {
    const { wheelDelta } = event;
    const mode = wheelDelta > 0 ? "up" : "down";

    step = Math.abs(wheelDelta / frame);

    cancelPreviousRaf();

    onScrollTo(target.value!, mode);
  }

  tryOnMounted(() => document.addEventListener("mousewheel", handler));

  tryOnUnmounted(() => document.removeEventListener("mousewheel", handler));

  return {
    target,
    scrollTo
  };
}
