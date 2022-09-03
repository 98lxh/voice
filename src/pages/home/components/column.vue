<script setup lang="ts">
import { useAppStore } from "@/store/modules/app";

defineProps<{
  id: number;
}>();

const { cursor } = useAppStore();
const { setCursor } = cursor!;
</script>

<template>
  <div class="room__columns" text="#fff" text-sm>
    <div>
      <div p="10px">ID : {{ id }}</div>
      <div
        class="border-color"
        flex
        border
        h="400px"
        items-center
        justify-center
        border-l-none
        border-r-none
      >
        <div
          h="90%"
          w="90%"
          @mouseenter="() => setCursor('point')"
          @mouseleave="() => setCursor('arrow')"
        >
          <img
            w-full
            h-full
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
  width: 270px;
  min-width: 270px;
  height: 100%;
  width: 100%;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  user-select: none;
}
</style>
