<script setup lang="ts">

</script>

<template>
  <div class="content">
   Home

   <RouterLink class="block my-3" :to="{name: 'signup'}">SignUp</RouterLink>
  </div>
</template>

<style scoped>
.content {
  max-width: 600px;
  margin: 0 auto;
}
</style>
