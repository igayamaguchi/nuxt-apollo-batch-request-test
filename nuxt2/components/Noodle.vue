<template>
  <div>
    <h2>Noodle</h2>
    <p>{{ result }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import NoodleQuery from './noodle.graphql'

export default Vue.extend({
  apollo: {
    result: {
      query: NoodleQuery,
      update(res) {
        return res
      },
    },
  },
})
</script>