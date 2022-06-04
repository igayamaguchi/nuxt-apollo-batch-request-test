<template>
  <div>
    <h1>Apollo Batch Request</h1>
    <p>{{ result }}</p>
    <Link />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Link from '~/components/Link.vue'
import IndexQuery from './index.graphql'

export default Vue.extend({
  components: { Link },
  apollo: {
    result: {
      query: IndexQuery,
      update(res) {
        return res
      },
    },
  },
})
</script>