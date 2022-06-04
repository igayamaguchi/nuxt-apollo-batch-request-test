<template>
  <div>
    <h2>Noodle</h2>
    <p>{{ result }}</p>
  </div>
</template>

<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable'
import {NoodleDocument} from './noodle.generated'

const { result } = useQuery(NoodleDocument)
</script>