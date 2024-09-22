<script setup lang="ts">
import { Statuses, useStatuses } from "@/composables/common/useStatuses";
import { delay } from "@/utils/delay";
import axios from "axios";
import { ref, onMounted } from "vue";

type Cars = {
  name: string;
  model: string;
  image: string;
  year: number;
  hp: number;
};



const {
    statuses, 
    setLoading, 
    setError, 
    setSuccess, 
    resetStatus 
} = useStatuses();

const car = ref<Cars>();

const getCar = async () => {
  try {
    setError(null);
    setLoading();

    await delay(1000);

    const { data } = await axios.get<Cars>(
      `https://vue-auth-jwt-default-rtdb.europe-west1.firebasedatabase.app/cars.json`
    );
    if (data) {
      console.log(data);
      car.value = data;
      setSuccess();
    }
  } 
  catch (e) {
    console.log(e);
    setError(e);
  } 
  finally {
    await delay(1500);
    resetStatus();
  }
};

onMounted(async () => {
  await getCar();
});
</script>

<template>
  <h1 class="text-6xl font-bold text-center">Cars</h1>

  <div class="flex flex-col justify-center">
    <div class="container mx-auto p-4">
      <ProgressSpinner v-if="statuses === Statuses.LOADING" />

      <template v-if="car && statuses !== Statuses.LOADING">
        <Card>
          <template #header>
            <img class="border-round" :src="car.image" alt="car" />
          </template>
          <template #title>{{ car.name }}</template>
          <template #subtitle>Model - {{ car.model }}</template>
          <template #content>
            <p>Year - {{ car.year }}</p>
            <p>HP - {{ car.hp }}</p>
          </template>
        </Card>
      </template>

      <template v-if="!car && statuses !== Statuses.LOADING">
        <p>No cars</p>
      </template>
    </div>
  </div>
</template>

<style scoped></style>
