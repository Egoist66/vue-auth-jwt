
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
    color: rgb(55, 165, 255);
    font-size: 18px;
}

.active {
    font-weight: bold;
}

</style>