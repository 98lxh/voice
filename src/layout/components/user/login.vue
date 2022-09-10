<script setup lang="ts">
import { reactive } from "vue";
import { Form, FormItem, Input, Button } from "useless-ui";

const emit = defineEmits(["change-mode"]);

const formData = reactive({
  username: "",
  passowrd: "",
});
</script>

<template>
  <Form :label-width="80" :model="formData">
    <FormItem label="用户名:" prop="username">
      <Input :error="false" v-model:value="formData.username" />
    </FormItem>

    <FormItem label="密码:" prop="password">
      <Input type="password" t :error="false" v-model:value="formData.passowrd" />
    </FormItem>

    <div flex w-full justify-end>
      <Button type="text" @click="() => emit('change-mode', 'register')"
        >没有账号?去注册</Button
      >
    </div>
  </Form>
</template>
