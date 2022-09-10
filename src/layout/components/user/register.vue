<script setup lang="ts">
import { reactive } from "vue";
import { useAppStore } from "@/store/modules/app";
import { Form, FormItem, Input, Button, DatePicker } from "useless-ui";

const emit = defineEmits(["change-mode"]);

const { cursor } = useAppStore();

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
      <Input
        :error="false"
        v-model:value="formData.username"
        v-bind="cursor?.helper.input"
      />
    </FormItem>

    <FormItem label="密码:" prop="password">
      <Input
        type="password"
        :error="false"
        v-model:value="formData.passowrd"
        v-bind="cursor?.helper.input"
      />
    </FormItem>

    <FormItem label="邮箱:" prop="emall">
      <Input
        :error="false"
        v-model:value="formData.emall"
        v-bind="cursor?.helper.input"
      />
    </FormItem>

    <FormItem label="生日:" prop="password">
      <DatePicker
        type="date"
        :error="false"
        v-model:value="formData.birthday"
        v-bind="cursor?.helper.point"
      />
    </FormItem>

    <div flex w-full justify-end v-bind="cursor?.helper.point">
      <Button type="text" @click="() => emit('change-mode', 'login')"
        >已经有账号?去登录</Button
      >
    </div>
  </Form>
</template>
