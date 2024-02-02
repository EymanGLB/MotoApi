<script setup lang="ts">

import {computed} from "vue";

const props = defineProps({
  moto: {
    type: Object,
    required: true
  }
})

const ManufacturerMap = {
  'yamaha': 'bg-blue-100 border-blue-950 text-blue-950 dark:bg-slate-950 dark:border-blue-100 dark:text-blue-100',
  'suzuki': 'bg-yellow-100 border-yellow-950 text-yellow-950 dark:bg-slate-950 dark:border-yellow-100 dark:text-yellow-100',
  'kawasaki': 'bg-emerald-100 border-emerald-950 text-emerald-950 dark:bg-slate-950 dark:border-emerald-100 dark:text-emerald-100',
  'honda': 'bg-red-100 border-red-950 text-red-950 dark:bg-slate-950 dark:border-red-100 dark:text-red-100',
  'ktm': 'bg-orange-100 border-orange-950 text-orange-950 dark:bg-slate-950 dark:border-orange-100 dark:text-orange-100'
}

const make = computed(() => {
  return props.moto.make.toString().toLowerCase();
})

const imageSrc = computed(() => {
  let img;
  if (make.value in ManufacturerMap) {
    img = "/images/" + make.value + ".svg"
  } else {
    img = "/images/not_found.png"
  }
  return img;
})

</script>

<template>
  <div
      :class="ManufacturerMap[make]"
      class="flex flex-row justify-between flex-wrap px-24 py-8 shadow-lg rounded-lg items-center self-center
      align-middle border-2 bg-slate-100 border-emerald-900"
  >
    <div class="flex flex-col gap-2">
      <h1 class="font-bold text-xl">{{ moto.make }} {{ moto.model }} {{ moto.year }}</h1>
      <p><span class="font-bold">Type:</span> {{ moto.type }}</p>
      <p><span class="font-bold">Engine:</span> {{ moto.engine }}</p>
      <p v-if="moto.power != undefined"><span class="font-bold">Power:</span> {{ moto.power }}</p>
    </div>
    <div class="items-center self-center align-middle">
      <nuxt-img :src="imageSrc" class="h-36 w-auto"/>
    </div>
  </div>
</template>

<style scoped>

</style>