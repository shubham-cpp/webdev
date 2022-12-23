<template>
  <ElConfigProvider :locale="en">
    <div>
      <h1>Hello from app</h1>
      <h2>{{ msg }}</h2>
      <ElButton type="warning">Hello</ElButton>
    </div>
  </ElConfigProvider>
</template>

<script setup lang="ts">
import { ElButton, ElConfigProvider } from 'element-plus'
import 'element-plus/dist/index.css'
import en from 'element-plus/dist/locale/en.min.mjs'
const msg = 'Hello from another'
</script>
