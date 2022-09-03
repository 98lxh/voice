import { defineStore } from "pinia";
import { type Cursor } from "@/hooks/core/use-cursor";
import { WindowSize } from "@/hooks";

interface IAppState {
  cursor: null | Cursor;
  viewport: { width: number; height: number } | null;
}

export const useAppStore = defineStore("app", {
  state: (): IAppState => {
    return {
      cursor: null,
      viewport: null
    };
  },
  actions: {
    setCursor(cursor: Cursor) {
      this.cursor = cursor;
    },
    setViewport({ size: viewport }: WindowSize) {
      this.viewport = viewport;
    }
  }
});
