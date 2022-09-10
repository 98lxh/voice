<script setup lang="ts">
import { ref } from "vue";
import Nav from "./components/nav";
import Main from "./components/main";
import Footer from "./components/footer";
import UserModal from "./components/user";

const userModalRef = ref<InstanceType<typeof UserModal> | null>(null);
</script>

<template>
  <div w-full h-100vh>
    <Nav @login-btn-click="() => userModalRef?.onDisplay()" />
    <Main />
    <Footer />

    <UserModal ref="userModalRef" />
  </div>
</template>
