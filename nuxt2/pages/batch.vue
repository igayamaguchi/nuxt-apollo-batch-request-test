<template>
  <div>
    <h1>Apollo Batch Request</h1>
    <Noodle />
    <Bread />
    <Link />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Link from '~/components/Link.vue'
import Noodle from '~/components/Noodle.vue';
import Bread from '~/components/Bread.vue';

export default Vue.extend({
  components: { Noodle, Bread }
})
</script>