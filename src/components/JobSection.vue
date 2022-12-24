<script setup lang="ts">
import { ref } from 'vue'
import type { JobCard as JobCardType } from '../types/Jobs'
import JobCard from './JobCard.vue'
const jobs = ref<JobCardType[]>([
  {
    id: crypto.randomUUID(),
    designation: 'B2B Sales Executive',
    companyName: 'Gympass',
    imgLink: 'https://www.remote-europe.com/jobs/b2b-sales-senior-manager',
    postedDate: new Date('12/15/2022'),
    remoteStatus: 'Partial Remote',
    tags: ['B2B', 'Sales'],
  },
])
</script>

<template>
  <!-- V for goes here for all jobs -->
  <section>
    <JobCard v-for="job in jobs" :key="job.id" :job="job" />
  </section>
</template>
