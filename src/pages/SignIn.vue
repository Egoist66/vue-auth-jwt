<script setup lang="ts">
import { Statuses } from "@/composables/common/useStatuses";
import { useAuth } from "@/composables/useAuth";
import { computed } from "vue";

const { email, password, statuses, error, auth } = useAuth();

const buttonRule = computed(
  () => !email.value || !password.value || statuses.value === Statuses.LOADING
);

</script>

<template>
  <div>
    <h2>Login</h2>
    <form
      @submit.prevent="async () => await auth('signIn')"
      class="flex flex-column gap-3"
    >
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
      <div class="flex flex-column gap-3">
        <Button
          :disabled="buttonRule"
          :loading="statuses === Statuses.LOADING"
          type="submit"
          :label="statuses === Statuses.LOADING ? 'Logining...' : 'Login'"
        />
        <span
          >No account?
          <RouterLink to="/signup">Sign up</RouterLink>
        </span>
      </div>

      <Message v-if="error?.length" severity="error">{{ error }}</Message>
    </form>
  </div>
</template>

<style scoped></style>
