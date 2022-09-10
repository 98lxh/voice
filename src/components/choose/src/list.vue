<script setup lang="ts">
import { ref } from "vue";
import { CollapseTransition, Button } from "useless-ui";
import { useAppStore } from "@/store/modules/app";

const current = ref(-1);
const { cursor } = useAppStore();
</script>

<template>
  <div
    @click="() => (current === index ? (current = -1) : (current = index))"
    v-for="index in 20"
    v-bind="cursor?.helper.point"
  >
    <div>
      <div
        class="collapse-border"
        flex
        justify-between
        items-center
        w-full
        p="2"
        bg="#1d1d1d"
        text-sm
      >
        <div flex items-center gap="2">
          <Icon
            :class="{ 'rotate-90': current === index }"
            name="arrow"
            color="#ffffffd9"
            size="10px"
            duration="300ms"
          />
          <p>七里香</p>
        </div>

        <Button type="text" h="15px">添加</Button>
      </div>
      <CollapseTransition :delay="0.4">
        <div v-show="current === index" px="2" bg="#141414">
          <p>TOODODODOO</p>
          <p>TOODODODOO</p>
          <p>TOODODODOO</p>
          <p>TOODODODOO</p>
          <p>TOODODODOO</p>
          <p>TOODODODOO</p>
          <p>TOODODODOO</p>
        </div>
      </CollapseTransition>
    </div>
  </div>
</template>
