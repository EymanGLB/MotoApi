<script setup lang="ts">
import Card from "~/components/atoms/Card.vue";

import {computed} from "vue";
import Button from "~/components/atoms/Button.vue";
const props = defineProps({
  moto: {
    type: Object,
    required: true
  }
})

const make = computed(() => {
  return props.moto.make.toString().toLowerCase();
})

const ManufacturerMap = [
  'yamaha',
  'suzuki',
  'honda',
  'kawasaki',
  'ktm'
]
const imageSrc = computed(() => {
  let img;
  if (ManufacturerMap.includes(make.value)) {
    img = "/images/" + make.value + ".svg"
  } else {
    img = "/images/not_found.png"
  }
  return img;
})

const id = computed(() => {
  return `MODEL:${props.moto.model}-MAKE:${props.moto.make}-YEAR:${props.moto.year}`
})

const goToMotoDetails = () => {
  navigateTo({path: `/moto/${id.value}`})
}
</script>

<template>
  <Card :moto="props.moto" :make="make">
    <div class="flex flex-col lg:flex-row lg:gap-4 justify-between items-center self-center
      align-middle">
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
    <Button tag-type="a" color="emerald">
      {{console.log(`https://api.api-ninjas.com/v1/motorcycles?make=${moto.make}&model=${moto.model}&year=${moto.year}&offset=1`, " -- MotoCard")}}
      <NuxtLink :to="`/moto/${id}`">Learn more</NuxtLink>
    </Button>
  </Card>
</template>