<script setup lang="ts">
import { JobCard } from '../types/Jobs'

function formatDate(date: Date): string {
  return date.toLocaleString('en-US', { month: 'short', day: '2-digit' })
}

defineProps<{ job: JobCard }>()
</script>
<template>
  <article>
    <!-- Should float right -->
    <time>{{ formatDate($props.job.postedDate) }}</time>
    <div>
      <img src="#" alt="Profile Of Company" />
      <div>
        <h4>Company Name</h4>
        <h3>Role</h3>
        <span>Remote Status</span>
      </div>
    </div>
    <!-- All Tags -->
    <div></div>
  </article>
</template>
