<script setup lang="ts">
import Debug from "@/components/service/Debug.vue";
import { Statuses } from "@/composables/common/useStatuses";
import { useAuth } from "@/composables/useAuth";
import { computed } from "vue";

const { email, error, password, auth, statuses } = useAuth();

const buttonRule = computed(
  () => !email.value || !password.value || statuses.value === Statuses.LOADING
);
</script>

<template>
  <div>
    Status: <Debug class="text-xl text-orange-400" visible :state="statuses" />

    <h2>Sign Up</h2>
    <form @submit.prevent="async () => await auth('signUp')" class="flex flex-column gap-3">
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
        <Password
          required
          toggle-mask
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

      <Message v-if="error?.length" :severity="'error'">{{ error }}</Message>
    </form>
  </div>
</template>

<style scoped></style>
