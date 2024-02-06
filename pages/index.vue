<script setup>
import Card from "~/components/atoms/Card.vue";
import Form from "~/components/organisms/Form.vue";

let manufacturer = ref('')
let model = ref('')

const apiKey = 'Srpk00NbahDC/8YxaLT6yQ==20HPS9HVhdI6rBcw'
const headers = {
  'X-Api-Key': apiKey
}

const motos = ref()

const handleFormSubmit = (values) => {
  manufacturer.value = values.manufacturer
  model.value = values.model

  getMoto()
}

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
    <!--
    <form class="flex flex-col gap-4" @submit.prevent="onSubmit">
      <InputText name="Manufacturer" placeholder="Yamaha" v-model:model-value="manufacturer"/>
      <InputText name="Model" placeholder="XTZ 660" v-model:model-value="model"/>

      <Button content="Search" :uppercase="true">Search</Button>
    </form>
    -->
    <Form @submitMoto="handleFormSubmit"/>

      <div class="flex flex-col justify-between gap-10 mx-5 py-10">
        <div v-for="(moto, index) in motos" :key="index">
          <Card :moto="moto"/>
        </div>
      </div>
  </div>
</template>
