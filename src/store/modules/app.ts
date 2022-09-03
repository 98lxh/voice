import { defineStore } from "pinia";
import { type Cursor } from "@/hooks/core/use-cursor";

interface IAppState {
  cursor: null | Cursor;
}

export const useAppStore = defineStore("app", {
  state: (): IAppState => {
    return {
      cursor: null
    };
  },
  actions: {
    setCursor(cursor: Cursor) {
      this.cursor = cursor;
    }
  }
});
