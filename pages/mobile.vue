<script setup lang="ts">
import { MOBILE_PROJECTS } from '../constants/portfolio'
</script>

<template>
  <div>
    <PageHeader
      title="Mobile Apps"
      glow-color="bg-blue-500/10"
    />

    <div class="mt-10 space-y-6">
      <div v-for="info in MOBILE_PROJECTS" :key="info.name">
        <mobileproj :info="info" />
      </div>
    </div>
  </div>
</template>
