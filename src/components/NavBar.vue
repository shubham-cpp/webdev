<script setup lang="ts">
import { ElButton, ElCol, ElImage, ElRow } from 'element-plus'
import { Search } from '@element-plus/icons-vue'
</script>

<template>
  <ElRow tag="nav" align="middle">
    <ElCol tag="header" class="title" :span="16">
      <ElImage
        class="img"
        src="https://www.remote-europe.com/sites/default/files/remoteeurope_logo.png"
        alt="remote jobs logo"
        style="width: 22rem; aspect-ratio: 10/2"
      />
      <p>The Best Online Jobs! Work from Home or Anywhere.</p>
    </ElCol>
    <ElCol tag="div" :span="8">
      <ElRow tag="ul" :gutter="2" align="middle">
        <ElCol :span="6">Home</ElCol>
        <ElCol :span="6">Jobs</ElCol>
        <ElCol :span="6">Blog</ElCol>
        <ElCol :span="6">
          <ElButton circle type="primary" title="Search Jobs" :icon="Search" />
        </ElCol>
      </ElRow>
    </ElCol>
  </ElRow>
</template>

<style scoped lang="scss">
nav {
  padding: 4px 2rem;
}
header {
  display: flex;
  flex-direction: column;
  p {
    font-size: 11px;
    margin-left: 3rem;
    margin-top: 0px;
    margin-bottom: 0px;
  }
}
</style>
