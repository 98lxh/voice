import { useAppStore } from "@/store/modules/app";
import { onMounted, ref, watch } from "vue";

interface MouceScrollConfig {
  frame: number;
}

const defaultOptions: MouceScrollConfig = {
  frame: 20
};

export function useMouseSroll({ frame } = defaultOptions) {
  const target = ref<HTMLElement | null>(null);
  const { viewport } = useAppStore();
  let animationTimes = 0;
  let step = 0;
  let raf = 0;

  const cancelPreviousRaf = () => {
    animationTimes = 0;
    raf && window.cancelAnimationFrame(raf);
  };

  function scrollTo(target: HTMLElement, mode: "up" | "down") {
    if (animationTimes === frame) {
      animationTimes = 0;
      return cancelPreviousRaf();
    }

    const current = target!.scrollLeft;

    raf = requestAnimationFrame(() => {
      const left = mode === "up" ? current - step : current + step;

      animationTimes++;

      scrollTo(target, mode);
      target.scrollTo({
        left
      });
    });
  }

  function handler(event: any) {
    const { wheelDelta } = event;
    const mode = wheelDelta > 0 ? "up" : "down";
    cancelPreviousRaf();
    scrollTo(target.value!, mode);
  }

  watch(
    () => viewport!,
    ({ width: vw }) => (step = Math.floor(vw / frame)),
    {
      deep: true,
      immediate: true
    }
  );

  onMounted(() => document.addEventListener("mousewheel", handler));

  return {
    target
  };
}
