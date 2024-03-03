<template>
  <aside class="px-5 py-8 h-full bg-sidebar w-full relative">
    <NuxtLink to="/" class="block mb-10">
      <NuxtImg src="/logo.svg" alt="logo" width="140px" class="mx-auto"/>
    </NuxtLink>
    <button class="absolute top-2 right-3 transition-colors hover:text-purple-400">
      <Icon name="line-md:logout" size="20" @click="logout"></Icon>
    </button>
    <Menu></Menu>
  </aside>
</template>

<script lang="ts" setup>
import { useAuthStore, useIsLoadingStore } from '~/store/auth.store';
const authStore = useAuthStore()
const isLoadingStore = useIsLoadingStore()
const router = useRouter()
const logout = async () => {
  isLoadingStore.set(true)
  await account.deleteSession('current')
  authStore.clear()
  await router.push('/login')
  isLoadingStore.set(false)
} 
</script>

<style>

</style>