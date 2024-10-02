
<script setup lang="ts">
import { useAuthStore } from '@/store/auth';

const auth = useAuthStore()


</script>


<template>

    <div v-if="auth.userData?.userId" class="flex gap-3">
        <RouterLink active-class="active" class="block" :to="{name: 'home'}">Home</RouterLink>
        <RouterLink active-class="active" class="block" :to="{name: 'cars'}">Cars</RouterLink>
    </div>

    <div>
        <Button v-if="auth.userData?.userId" class="menu-exit" @click="auth.destroyUserData()">Exit</Button>
    </div>
    
    
</template>

<style scoped>

.menu-exit {
    cursor: pointer;
}

a {
    color: #6366F1;
    font-size: 18px;
}

nav a:hover {
    color: #8385ff !important;
}

.active {
    font-weight: 900;
}

</style>