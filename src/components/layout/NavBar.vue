
<script setup lang="ts">


</script>


<template>

    <div class="flex gap-3">
        <RouterLink active-class="active" class="block" :to="{name: 'home'}">Home</RouterLink>
        <RouterLink active-class="active" class="block" :to="{name: 'cars'}">Cars</RouterLink>
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
    font-weight: bold;
}

</style>