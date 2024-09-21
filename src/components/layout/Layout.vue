<script setup lang="ts">


</script>

<template>

    <div  id="layout">
        <div  v-if="$slots.header" class="container">
           
            <header>
            
                <slot name="header"/>
                
            </header>
        </div>


        <main>
            <div class="container">
                <slot name="deafault"/>
            </div>
        </main>

    </div>
</template>



<style scoped>

main {
    padding-top: 30px;
}

.profile-link {
    color: deepskyblue;
}



</style>