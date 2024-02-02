<script setup lang="ts">

import {computed} from "vue";

const props = defineProps({
  moto: {
    type: Object,
    required: true
  }
})

const ManufacturerMap = {
  'yamaha': 'bg-blue-100 text-blue-950',
  'suzuki': 'bg-yellow-100 text-yellow-950',
  'kawasaki': 'bg-emerald-100 text-emerald-950',
  'honda': 'bg-red-100 text-red-950',
  'ktm': 'bg-orange-100 text-orange-950'
}

const make = computed(() => {
  return props.moto.make.toString().toLowerCase();
})

const imageSrc = computed(() => {
  return "/images/" + make.value + ".svg"
})

</script>

<template>
  <div
      :class="ManufacturerMap[make]"
      class="flex flex-row justify-between flex-wrap px-24 py-8 shadow-lg rounded-lg items-center self-center align-middle">
    <div class="flex flex-col gap-2">
      <h1 class="font-bold text-xl">{{moto.make}} {{moto.model}} {{moto.year}}</h1>
      <p><span class="font-bold">Type:</span> {{moto.type}}</p>
      <p><span class="font-bold">Engine:</span> {{moto.engine}}</p>
      <p v-if="moto.power != undefined"><span class="font-bold">Power:</span> {{moto.power}}</p>
    </div>
    <div class="items-center self-center align-middle">
      <nuxt-img :src="imageSrc" class="h-36 w-auto" />
    </div>
  </div>
</template>

<style scoped>

</style>