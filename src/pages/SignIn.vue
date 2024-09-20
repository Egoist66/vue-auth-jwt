<script setup lang="ts">
import { useSignUp } from '@/composables/useSignUp';


  const {email, password, signup} = useSignUp()


</script>

<template>
  <div>
    <h2>Sign In</h2>
    <form @submit.prevent="signup" class="flex flex-column gap-3">
      <!-- <Message v-if="authStore.error" severity="warn">{{ authStore.error }}</Message> -->
      <div class="p-inputgroup flex-1">
        <span class="p-inputgroup-addon">
          <i class="pi pi-user"></i>
        </span>
        <InputText required type="email" v-model="email"  placeholder="Your Email" />
      </div>
      <div class="p-inputgroup flex-1">
        <span class="p-inputgroup-addon">
          <i class="pi pi-at"></i>
        </span>
        <InputText required type="password" v-model="password"  placeholder="Enter Password" />
      </div>
      <!-- <Loader v-if="authStore.loader" /> -->
      <div  class="flex flex-column gap-3">
        <Button type="submit" label="Login" />
        <span
          >No account?
          <RouterLink to="/signup">Sign up</RouterLink>
        </span>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
