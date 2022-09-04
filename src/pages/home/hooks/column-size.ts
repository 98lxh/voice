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
export function useColumnSize() {
  const { viewport } = useAppStore();

  const size = reactive({
    width: 0,
    height: 0
  });

  watch(
    () => viewport!.height,
    VIEWPORT_HEIGHT => {
      const CONTENT_HEIGHT = VIEWPORT_HEIGHT - OTHER_HEIGHT;
      const scale = CONTENT_HEIGHT / HOME_SCALE_HEIGHT;
      size.height = CONTENT_HEIGHT;
      size.width = HOME_SCALE_WIDTH * scale;
    },
    {
      immediate: true
    }
  );

  return {
    size
  };
}
