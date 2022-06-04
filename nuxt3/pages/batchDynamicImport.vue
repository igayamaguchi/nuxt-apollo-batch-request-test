<template>
  <div>
    <h1>Apollo Batch Request</h1>
    <DynamicComponent />
    <Link />
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import Link from '~/components/Link.vue'

const DynamicComponent = defineAsyncComponent(() => import('~/components/DynamicComponent.vue'))
</script>