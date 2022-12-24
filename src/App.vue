<template>
  <ElConfigProvider :locale="en">
    <ElButton type="primary">Hello Btn</ElButton>
  </ElConfigProvider>
</template>

<script setup lang="ts">
import { ElConfigProvider, ElButton } from 'element-plus'
import 'element-plus/dist/index.css'
import en from 'element-plus/dist/locale/en.min.mjs'
</script>
