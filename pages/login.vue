<template>
  <div class="flex items-center justify-center min-h-screen w-full">
    <div class="rounded bg-sidebar w-1/4 p-5">
      <h1 class="text-2xl font-bold text-center mb-5">Login</h1>
      <span v-if="authStore.isInvalid" class="text-2xl text-rose-700 text-center mb-5 block">Invalid Cridentials !</span>
      <form>
        <UiInput
          placeholder="Email"
          type="email"
          class="mb-3"
          v-model="emailRef"
        />
        <UiInput
          placeholder="Password"
          type="password"
          class="mb-3"
          v-model="passwordRef"
        />
        <UiInput
          placeholder="Name"
          type="text"
          class="mb-3"
          v-model="nameRef"
        />
        <div class="flex item-center justify-center gap-5">
          <UiButton type="button" @click="login">Login</UiButton>
          <UiButton type="button" @click="register">Register</UiButton>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useAuthStore, useIsLoadingStore } from "~/store/auth.store";
import { v4 as uuid } from "uuid";
useHead({
  title: "Login",
});

const emailRef = ref<string>("");
const passwordRef = ref<string>("");
const nameRef = ref<string>("");

const isLoadingStore = useIsLoadingStore();
const authStore = useAuthStore();
const router = useRouter();

const login = async () => {
  isLoadingStore.set(true);
  try {
    await account.createEmailSession(emailRef.value, passwordRef.value);
    const response = await account.get();
    if (response) {
      authStore.set({
        email: response.email,
        name: response.name,
        status: response.status,
      });
    }
    emailRef.value = "";
    passwordRef.value = "";
    nameRef.value = "";
    authStore.isInvalid = false;
    await router.push("/");
  } catch (error) {
    authStore.isInvalid= true;
    await router.push("/login");
  } finally {
    isLoadingStore.set(false);
  }
};

const register = async () => {
  await account.create(
    uuid(),
    emailRef.value,
    passwordRef.value,
    nameRef.value
  );
  await login();
};
</script>

<style></style>
