<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <main h="100vh">
    <RouterView #default="{ Component }">
      <Transition name="zoom-fade" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </main>
</template>
