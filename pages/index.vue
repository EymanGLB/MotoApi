<script setup>
import InputText from "~/components/atoms/InputText.vue";
import Card from "~/components/atoms/Card.vue";
import Button from "~/components/atoms/Button.vue";

const manufacturer = ref('')
const model = ref('')
const showError = ref(false)

function onSubmit() {
  if (manufacturer.value === '' || model.value === '') {
    showError.value = true
  } else {
    showError.value = false
    getMoto()
    console.log(motos)
  }
}

const apiKey = 'Srpk00NbahDC/8YxaLT6yQ==20HPS9HVhdI6rBcw'
const headers = {
  'X-Api-Key': apiKey
}

const motos = ref()

async function getMoto() {
  const api = `https://api.api-ninjas.com/v1/motorcycles?make=${manufacturer.value}&model=${model.value}`
  try {
    const response = await fetch(api, {headers});
    motos.value = await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
</script>

<template>
  <div>
    <form class="flex flex-col gap-4" @submit.prevent="onSubmit">
      <InputText name="Manufacturer" placeholder="Yamaha" v-model:model-value="manufacturer"/>
      <InputText name="Model" placeholder="XTZ 660" v-model:model-value="model"/>

      <Button content="Search" :uppercase="true">Search</Button>
    </form>
    <template v-if="showError">
      <p class="bg-red-400 text-red-950 rounded m-5 border border-red-950 px-5">You have to fill all the text
        boxes</p>
    </template>
    <template v-else>
      <div class="flex flex-col justify-between gap-10 mx-5 py-10">
        <div v-for="(moto, index) in motos" :key="index">
          <Card :moto="moto"/>
        </div>
      </div>
    </template>
  </div>
</template>
