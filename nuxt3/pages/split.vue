<template>
  <div>
    <h1>Apollo Batch Request</h1>
    <Noodle />
    <Bread />
    <Link />
  </div>
</template>

<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable'
import {IndexDocument} from './index.generated'
import Link from '~/components/Link.vue'
import Noodle from '~/components/Noodle.vue';
import Bread from '~/components/Bread.vue';

</script>