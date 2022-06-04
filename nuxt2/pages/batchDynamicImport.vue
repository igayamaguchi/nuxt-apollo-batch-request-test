<template>
  <div>
    <h1>Apollo Batch Request</h1>
    <DynamicComponent />
    <Link />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Link from '~/components/Link.vue'

export default Vue.extend({
  components: { DynamicComponent: () => import('~/components/DynamicComponent.vue') },
})
</script>