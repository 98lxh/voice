import { reactive, watch } from "vue";
import { useAppStore } from "@/store/modules/app";
import {
  FOOTER_HEIGHT,
  NAV_HEIGHT,
  ACTION_BAR_HEIGHT,
  HOME_SCALE_HEIGHT,
  HOME_SCALE_WIDTH
} from "@/config/layout";

/**
 * 同比放大缩小 原比例：400*270
 */
const OTHER_HEIGHT = FOOTER_HEIGHT + NAV_HEIGHT + ACTION_BAR_HEIGHT;
const MAX_HEIGHT = 200;

export function useColumnSize() {
  const { viewport } = useAppStore();
  let init = true;

  const size = reactive({
    width: 0,
    height: 0
  });

  watch(
    () => viewport!.height,
    VIEWPORT_HEIGHT => {
      const CONTENT_HEIGHT = VIEWPORT_HEIGHT - OTHER_HEIGHT;
      const SCALE = CONTENT_HEIGHT / HOME_SCALE_HEIGHT;
      size.height = CONTENT_HEIGHT;

      if (CONTENT_HEIGHT >= MAX_HEIGHT || init) {
        size.width = HOME_SCALE_WIDTH * SCALE;
      }

      if (init) init = false;
    },
    {
      immediate: true
    }
  );

  return {
    size
  };
}
