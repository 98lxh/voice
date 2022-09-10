<script setup lang="ts">
import { useContentSize } from "@/hooks";
import Nav from "./components/nav";

const style = useContentSize();
</script>

<template>
  <div>
    <Nav></Nav>
    <div fixed w-full text="#fff" text-xl font-bold :style="style">TODO:PROFILE</div>
  </div>
</template>
