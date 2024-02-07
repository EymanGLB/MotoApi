<script setup lang="ts">
import {useAsyncData, useRoute} from "#app";
import Spinner from "~/components/atoms/Spinner.vue";
import Card from "~/components/atoms/Card.vue";

const route = useRoute()
const routeParams = route.params
let motoObject = {
  make: '',
  model: '',
  year: ''
}

const isLoading = ref(false)
let moto = ref()
// get the api info
let a = routeParams.id.toString().split('-')
motoObject.make = a.at(2)!
motoObject.model = a.at(0)!
motoObject.year = a.at(3)!

const apiKey = 'Srpk00NbahDC/8YxaLT6yQ==20HPS9HVhdI6rBcw'
const headers = {
  'X-Api-Key': apiKey
}

const api = `https://api.api-ninjas.com/v1/motorcycles?make=${motoObject.make}&model=${motoObject.model}&year=${motoObject.year}&offset=1`

const {data: motoApiObj} = await useAsyncData('motoApiObj', async () => {
  const response = await fetch(api, {headers})
  if (!response.ok) throw new Error('Could not load moto')
  return response.json()
})
moto.value = motoApiObj.value

onMounted(() => {
  console.log(moto.value, api, motoObject)
})
</script>

<template>
  <div v-if="isLoading || moto[0] == undefined" class="self-center">
    <Spinner/>
  </div>
  <div v-if="moto != undefined">
    <Card :moto="moto" class="flex flex-col gap-2">
      <div v-for="(value, key) in moto[0]" :key="key" class="self-start">
        <strong>
          {{ key.toString().replace('_', ' ')
            .charAt(0).toUpperCase()
            .concat(key.toString().slice(1)) }}:
        </strong>
        {{ value }}
      </div>
    </Card>
  </div>
</template>

<style scoped>

</style>