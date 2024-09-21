<script setup lang="ts">
import Layout from '@/components/layout/Layout.vue';
import AppHeader from './components/layout/AppHeader.vue';



</script>

<template>


  <Layout>

    <template #header>

      <AppHeader />


    </template> 

  
    <template #deafault>


      <RouterView />


    </template>

    

  </Layout>

</template>

<style scoped>

</style>
