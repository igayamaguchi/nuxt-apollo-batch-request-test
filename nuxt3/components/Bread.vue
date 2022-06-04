<template>
  <div>
    <h2>Bread</h2>
    <p>{{ result }}</p>
  </div>
</template>

<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable'
import {BreadDocument} from './bread.generated'

const { result } = useQuery(BreadDocument)
</script>