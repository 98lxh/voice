<script setup lang="ts">
import { useAppStore } from "@/store/modules/app";
import { computed } from "vue";

const props = defineProps<{
  id: number;
  size: Record<string, number>;
}>();

const { cursor } = useAppStore();
const { setCursor } = cursor!;

const style = computed(() => {
  const { size } = props;

  return {
    width: size.width + "px",
    height: size.height + "px"
  };
});
</script>

<template>
  <div class="room__columns" text="#fff" text-sm>
    <div :style="style" overflow-hidden duration="500ms">
      <div p="10px">ID : {{ id }}</div>
      <div
        class="border-color h-[calc(100%-80px)]"
        flex
        border
        items-center
        justify-center
        border-l-none
        border-r-none
      >
        <div
          h="90%"
          w="90%"
          overflow-hidden
          @mouseenter="() => setCursor('point')"
          @mouseleave="() => setCursor('arrow')"
        >
          <img
            w-full
            h-full
            hover:scale-110
            duration="500"
            src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201911%2F02%2F20191102100245_jxvtd.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664817933&t=47327c3082c3aca1e4281df78a48b24e"
          />
        </div>
      </div>
      <div text-right p="10px">在线 : 1</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.room__columns {
  height: 100%;
  width: 100%;
  border-right: 1px solid rgba(233, 233, 233, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  user-select: none;
  padding-bottom: 100px;
}
</style>
