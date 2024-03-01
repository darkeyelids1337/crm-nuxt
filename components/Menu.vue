<template>
  <div>
    <NuxtLink
      class="flex items-center py-1 px-3 rounded-lg w-full hover:bg-gray-700 hover:shadow transition-all mb-2"
      v-for="(item, index) in MENU_DATA"
      :key="index"
      :to="item.url"
    >
      <Icon :name="item.icon" class="mr-3"></Icon>
      <span>{{ item.name }}</span>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import { MENU_DATA } from "./menu.data";
</script>
