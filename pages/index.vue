<script setup>
import Form from "~/components/organisms/Form.vue";
import Spinner from "~/components/atoms/Spinner.vue";
import MotoCard from "~/components/organisms/MotoCard.vue";

let manufacturer = ref('')
let model = ref('')
const motos = ref()
const isLoading = ref(false);

const apiKey = 'Srpk00NbahDC/8YxaLT6yQ==20HPS9HVhdI6rBcw'
const headers = {
  'X-Api-Key': apiKey
}


const handleFormSubmit = (values) => {
  manufacturer.value = values.manufacturer
  model.value = values.model
  getMoto()
  manufacturer.value = ''
  model.value = ''
}

async function getMoto() {
  const api = `https://api.api-ninjas.com/v1/motorcycles?make=${manufacturer.value}&model=${model.value}`
  isLoading.value = true;
  try {
    const response = await fetch(api, {headers});
    motos.value = await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
  } finally {
    isLoading.value = false;
  }
}
</script>

<template>
  <div>
    <Form @submitMoto="handleFormSubmit"/>
    <div class="flex flex-col justify-between gap-10 mx-5 py-10">
      <div v-if="isLoading" class="flex flex-col w-full justify-center items-center">
        <Spinner />
      </div>
      <div v-for="(moto, index) in motos" :key="index">
        <MotoCard :moto="moto"/>
      </div>
    </div>
  </div>
</template>
