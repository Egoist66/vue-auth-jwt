<script setup lang="ts">

/**
 * Debug component
 * @displayName Debug
 */

 
defineProps<{state: any, visible: boolean}>()


</script>


<template>
    <div>

        <pre v-if="visible" v-bind="$attrs">{{ state }}</pre>

    </div>
</template>



<style scoped>

</style>