<script setup>
import InputText from "~/components/atoms/InputText.vue";

const manufacturer = ref('')
const model = ref('')
const showError = ref(false)

function onSubmit() {
  if (manufacturer.value === '' || model.value === '') {
    showError.value = true
  } else {
    showError.value = false
    getMoto()
  }
}

const apiKey = 'Srpk00NbahDC/8YxaLT6yQ==20HPS9HVhdI6rBcw'
const headers = {
  'X-Api-Key': apiKey
}

const motos = ref()

async function getMoto() {
  const api = `https://api.api-ninjas.com/v1/motorcycles?make=${manufacturer.value}&model=${model.value}`
  console.log(manufacturer.value, model.value)
  try {
    const response = await fetch(api, {headers});
    motos.value = await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
</script>

<template>
  <NuxtLayout>
    <div>
      <form class="flex flex-col gap-4" @submit.prevent="onSubmit">
        <InputText name="Manufacturer" placeholder="Yamaha" v-model:model-value="manufacturer"/>
        <InputText name="Model" placeholder="XTZ 660" v-model:model-value="model"/>

        <Button content="Search" uppercase> hola </Button>
      </form>
      <template v-if="showError">
        <p class="bg-red-400 text-red-950 rounded m-5 border border-red-950 px-5">You have to fill all the text
          boxes</p>
      </template>
      <template v-else>
        <div class="flex flex-col gap-5 mx-5">
          <div v-for="(moto, index) in motos" :key="index" class="px-4 py-2 shadow-xl rounded bg-slate-200 border border-slate-950 text-slate-800">
            <p>{{ moto.make }}</p>
            <p>{{ moto.type }}</p>
            <p>{{ moto.model }}</p>
            <p>{{ moto.year }}</p>
            <p>{{ moto.engine }}</p>
            <p>{{ moto.power }}</p>
            <p>{{ moto.torque }}</p>
            <p>{{ moto.cooling }}</p>
            <p>{{ moto.gearbox }}</p>
            <p>{{ moto.fuel_capacity }}</p>
            <p>{{ moto.starter }}</p>
          </div>
        </div>
      </template>
    </div>
  </NuxtLayout>
</template>
