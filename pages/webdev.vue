<script setup lang="ts">
import { WEB_PROJECTS } from '../constants/portfolio'
</script>

<template>
  <div>
    <PageHeader
      title="Web Apps"
    />

    <div class="mt-10 space-y-6">
      <div v-for="info in WEB_PROJECTS" :key="info.name">
        <Webproj :info="info" />
      </div>
    </div>
  </div>
</template>
