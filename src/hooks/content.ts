import { FOOTER_HEIGHT, NAV_HEIGHT } from "@/config/layout";
import { useAppStore } from "@/store/modules/app";
import { computed } from "vue";

export function useContentSize() {
  const { viewport } = useAppStore();

  return computed(() => ({
    height: viewport!.height - (FOOTER_HEIGHT + NAV_HEIGHT) + "px",
    top: NAV_HEIGHT + "px",
    width: "100%"
  }));
}
