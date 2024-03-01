<template>
  <aside class="px-5 py-8 h-full bg-sidebar w-full relative">
    <NuxtLink to="/" class="block mb-10">
      <NuxtImg src="/logo.svg" alt="logo" width="140px" class="mx-auto"/>
    </NuxtLink>
    <button class="absolute top-2 right-3 transition-colors hover:text-purple-400">
      <Icon name="line-md:logout" size="20"></Icon>
    </button>
    <Menu></Menu>
  </aside>
</template>

<script lang="ts" setup>

</script>

<style>

</style>