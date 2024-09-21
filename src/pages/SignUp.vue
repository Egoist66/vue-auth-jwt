<script setup lang="ts">
import Debug from "@/components/service/Debug.vue";
import { Statuses } from "@/composables/common/useStatuses";
import { useSignUp } from "@/composables/useSignUp";
import { useAuthStore } from "@/store/auth";
import { storeToRefs } from "pinia";
import { computed } from "vue";

const { email, password, signup, statuses } = useSignUp();
const { userData } = storeToRefs(useAuthStore());

const buttonRule = computed(
  () => !email.value || !password.value || statuses.value === Statuses.LOADING
);
</script>

<template>
  <div>
    <Debug class="text-xl" visible :state="statuses" />

    <h2>Sign Up</h2>
    <form @submit.prevent="signup" class="flex flex-column gap-3">
      <!-- <Message v-if="authStore.error" severity="warn">{{ authStore.error }}</Message> -->
      <div class="p-inputgroup flex-1">
        <span class="p-inputgroup-addon">
          <i class="pi pi-user"></i>
        </span>
        <InputText required type="email" v-model="email" placeholder="Your Email" />
      </div>
      <div class="p-inputgroup flex-1">
        <span class="p-inputgroup-addon">
          <i class="pi pi-at"></i>
        </span>
        <InputText
          required
          type="password"
          v-model="password"
          placeholder="Enter Password"
        />
      </div>
      <!-- <Loader v-if="authStore.loader" /> -->
      <div class="flex flex-column gap-3">
        <Button
          :disabled="buttonRule"
          :loading="statuses === Statuses.LOADING"
          type="submit"
          :label="statuses === Statuses.LOADING ? 'Signing up...' : 'Sign up'"
        />
        <span
          >Are you already registered?
          <RouterLink to="/signin">Sign in</RouterLink>
        </span>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
