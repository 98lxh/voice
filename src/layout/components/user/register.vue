<script setup lang="ts">
import { reactive } from "vue";
import { Form, FormItem, Input, Button, DatePicker } from "useless-ui";

const emit = defineEmits(["change-mode"]);

const formData = reactive({
  username: "",
  passowrd: "",
  birthday: "",
  emall: "",
});
</script>

<template>
  <Form :label-width="80" :model="formData">
    <FormItem label="用户名:" prop="username">
      <Input :error="false" v-model:value="formData.username" />
    </FormItem>

    <FormItem label="密码:" prop="password">
      <Input type="password" :error="false" v-model:value="formData.passowrd" />
    </FormItem>

    <FormItem label="邮箱:" prop="emall">
      <Input :error="false" v-model:value="formData.emall" />
    </FormItem>

    <FormItem label="生日:" prop="password">
      <DatePicker type="date" :error="false" v-model:value="formData.birthday" />
    </FormItem>

    <div flex w-full justify-end>
      <Button type="text" @click="() => emit('change-mode', 'login')"
        >已经有账号?去登录</Button
      >
    </div>
  </Form>
</template>
