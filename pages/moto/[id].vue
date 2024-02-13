<script setup lang="ts">
import { useRoute } from "#app";
import Spinner from "~/components/atoms/Spinner.vue";
import Card from "~/components/atoms/Card.vue"
import { useMotoApi } from '~/composables/MotoApi'

const { getMoto } = useMotoApi();

const route = useRoute()
const routeParams = route.params
console.log("ROUTE PARAMS: ", routeParams)

const KeysObject = {
  make: '',
  model: '',
  year: '',
}

const getInfoFromURL = (routeParams: string) => {
  let separatedURL = routeParams.split('-')
  console.log("URL Separated ", separatedURL)
  separatedURL.forEach((arrIndex) => {
    let split = arrIndex.split(':')
    let key = split[0]
    let name = split[1]

    if (key == 'MAKE')
      KeysObject.make = name
    else if (key == 'MODEL')
      KeysObject.model = name
    else if (key == 'YEAR')
      KeysObject.year = name
  })
}


getInfoFromURL(routeParams.id.toString())
console.log('KEYS 3', KeysObject)
const api = `https://api.api-ninjas.com/v1/motorcycles?make=${KeysObject.make}&model=${KeysObject.model}&year=${KeysObject.year}`

const { data, pending, error } = getMoto(api)
const moto = ref()
moto.value = data;
</script>

<template>
  <div v-if="pending" class="flex self-center justify-center mx-auto">
    <Spinner />
  </div>
  <div v-else>
    <Card :moto="moto.value" :make="KeysObject.make">
      <div v-for="(prop, index) in moto.value" :key="index" class="flex flex-col gap-2">
        <div v-for="(value, key) in prop" :key="key">
          <p>
            <strong>{{
              key.toString()
                .charAt(0).toUpperCase()
                .concat(key.toString().slice(1))
                .replace('_', ' ')
            }}:</strong>
            {{ value }}
          </p>
        </div>
      </div>
    </Card>
  </div>
  <div v-if="error">
    <p>An error has ocurred fetching data</p>
  </div>
</template>

<style scoped></style>