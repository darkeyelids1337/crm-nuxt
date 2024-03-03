<template>
  <Loader v-if="isLoadingStore.isLoading"></Loader>
  <div v-else :class="{grid: authStore.isAuth}" style="min-height: 100vh;">
    <Sidebar v-if="authStore.isAuth"></Sidebar>
    <div class="">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>

import { account } from '@/utils/appwrite';
import { useAuthStore, useIsLoadingStore } from '~/store/auth.store';

const isLoadingStore = useIsLoadingStore();
const authStore = useAuthStore();
const router = useRouter();

onMounted( async () => {
  try {
    const user = await account.get()
    if(user) authStore.set(user)
  } catch (error) {
    router.push('/login')
  } finally{
    isLoadingStore.set(false)
  }
})
</script>

<style scoped>
  .grid{
    display: grid;
    grid-template-columns: 1fr 6fr;
  }
</style>