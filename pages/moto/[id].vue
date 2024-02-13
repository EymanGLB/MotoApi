<script setup lang="ts">
import { useRoute } from "#app";
import { useMotoApi } from '~/composables/MotoApi'

const {  } = useMotoApi();

const route = useRoute()
const routeParams = route.params
console.log("ROUTE PARAMS: ", routeParams)

const isLoading = ref(false)

let keys: string[] = []

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
    //keys.push(arrIndex.split(':').at(1)!)
  })
}


getInfoFromURL(routeParams.id.toString())
console.log('KEYS 3', KeysObject)
const api = `https://api.api-ninjas.com/v1/motorcycles?make=${KeysObject.make}&model=${KeysObject.model}&year=${KeysObject.year}&offset=1`

</script>

<template>
  {{ api }}
  <!--
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
  -->
</template>

<style scoped></style>