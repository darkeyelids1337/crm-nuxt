<template>
  <div class="grid" style="min-height: 100vh;">
    <Sidebar></Sidebar>
    <div class="">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
  .grid{
    display: grid;
    grid-template-columns: 1fr 6fr;
  }
</style>