<template>
  <div>
    <h1>Apollo Batch Request</h1>
    <p>{{ result }}</p>
    <Link />
  </div>
</template>

<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable'
import {IndexDocument} from './index.generated'
import Link from '~/components/Link.vue'

const { result } = useQuery(IndexDocument)
</script>