<script setup lang="ts">
import JobSection from '../components/JobSection.vue'
import BlogSection from '../components/BlogSection.vue'
</script>

<template>
  <div class="home-page">
    <JobSection />
    <BlogSection />
  </div>
</template>

<style lang="scss">
.home-page {
  display: grid;
  gap: 1rem;
  grid-template-columns: 70% 30%;
}
</style>
