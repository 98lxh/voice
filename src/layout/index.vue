<script setup lang="ts">
import { computed, ref } from "vue";
import Nav from "./components/nav";
import Main from "./components/main";
import Footer from "./components/footer";
import UserModal from "./components/user";
import { useRoute } from "vue-router";

const route = useRoute();

const userModalRef = ref<InstanceType<typeof UserModal> | null>(null);
const path = computed(() => route.path);

const hiddenNav = computed(() => path.value === "/listen");
</script>

<template>
  <div w-full h-100vh>
    <Nav v-if="!hiddenNav" @login-btn-click="() => userModalRef?.onDisplay()" />
    <Main />
    <Footer />

    <UserModal ref="userModalRef" />
  </div>
</template>
