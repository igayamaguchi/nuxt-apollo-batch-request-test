<template>
  <div>
    <Noodle />
    <Bread />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Noodle from './Noodle.vue';
import Bread from './Bread.vue';

export default Vue.extend({
  components: { Noodle, Bread }
})
</script>