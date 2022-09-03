<script setup lang="ts">
import { computed } from "vue";

export interface Props {
  prefix?: string;
  name: string;
  color?: string;
  size?: string;
}

const props = withDefaults(defineProps<Props>(), {
  prefix: "icon",
  color: "#fff",
  size: "1em"
});

const symbolId = computed(() => `#${props.prefix}-${props.name}`);
</script>

<template>
  <svg aria-hidden="true" class="svg-icon" :width="size" :height="props.size">
    <use :xlink:href="symbolId" rel="external nofollow" :fill="props.color" />
  </svg>
</template>
