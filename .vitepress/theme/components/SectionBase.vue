<script setup lang="ts">
/**
 * Author: janko
 * Status: Collecting data about blocks
 *
 * Component to control a block section
 * TODO: Do alignment
 * TODO: Do centering
 *
 * Why it's needed:
 * I encountered the deprecated HTML <center> tag, which VitePress
 * detects as a custom component that does not exist.
 */
</script>

<template>
  <div class="flex flex-row flex-center">
    <slot></slot>
  </div>

</template>

<style scoped>

</style>