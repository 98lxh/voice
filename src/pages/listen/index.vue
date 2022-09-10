<script setup lang="ts">
import Nav from "./components/nav";
import Player from "@/components/player";
import Choose from "@/components/choose";
import { useMouseSroll } from "@/hooks";

const { target, scrollTo } = useMouseSroll({
  frame: 3,
});
</script>

<template>
  <div>
    <Nav :target="target" :scroll-to="scrollTo" />
    <div class="listen__content" ref="target">
      <Choose />
      <Player />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.listen__content {
  display: flex;
  height: calc(100vh - 80px);
  width: 100%;
  color: #fff;
  overflow-y: scroll;
  position: fixed;
  top: 80px;

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
