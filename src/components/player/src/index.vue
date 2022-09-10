<script setup lang="ts">
import { computed, ref, watchEffect } from "vue";
import { useAppStore } from "@/store/modules/app";
const { viewport } = useAppStore();

const isColumn = ref(false);
const style = computed(() => ({
  minWidth: viewport?.width + "px",
}));

watchEffect(() => {
  isColumn.value = viewport!.width <= 920;
});
</script>

<template>
  <div :class="{ 'is-column': isColumn }" :style="style" h-full flex>
    <div w="40%" flex justify-center>
      <img
        w="250px"
        h="250px"
        class="rotate"
        rounded-full
        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201911%2F02%2F20191102100245_jxvtd.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664817933&t=47327c3082c3aca1e4281df78a48b24e"
      />
    </div>
    <div flex-1 text-center p="5">歌词部分</div>
  </div>
</template>

<style lang="scss" scoped>
.is-column {
  flex-direction: column;

  div {
    width: 100%;
  }
}
</style>
