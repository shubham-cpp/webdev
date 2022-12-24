<template>
  <ElConfigProvider :locale="en">
    <NavBar />
    <main>
      <HomeView />
    </main>
  </ElConfigProvider>
</template>

<script setup lang="ts">
import { ElConfigProvider } from 'element-plus'
import NavBar from './components/NavBar.vue'
import HomeView from './pages/HomeView.vue'
import 'element-plus/dist/index.css'
import en from 'element-plus/dist/locale/en.min.mjs'
</script>
