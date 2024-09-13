<script setup lang="ts">
import { useData } from 'vitepress'

const { site, page } = useData()

</script>

<template>
<span>Borukva Index Page</span>

  {{site}}
  {{page}}
</template>

<style scoped>

</style>