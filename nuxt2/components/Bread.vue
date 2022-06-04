<template>
  <div>
    <h2>Bread</h2>
    <p>{{ result }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import BreadQuery from './bread.graphql'

export default Vue.extend({
  apollo: {
    result: {
      query: BreadQuery,
      update(res) {
        return res
      },
    },
  },
})
</script>