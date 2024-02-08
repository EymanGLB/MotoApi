<script setup lang="ts">

const props = defineProps({
  moto: {
    type: Object,
    required: true
  },
  make: {
    type: String,
    required: false,
    default: 'yamaha'
  }
})

const ManufacturerMap = {
  'yamaha': 'bg-blue-100 border-blue-950 text-blue-950 dark:bg-slate-900 dark:border-blue-100 dark:text-blue-100',
  'suzuki': 'bg-yellow-100 border-yellow-950 text-yellow-950 dark:bg-slate-900 dark:border-yellow-100 dark:text-yellow-100',
  'kawasaki': 'bg-emerald-100 border-emerald-950 text-emerald-950 dark:bg-slate-900 dark:border-emerald-100 dark:text-emerald-100',
  'honda': 'bg-red-100 border-red-950 text-red-950 dark:bg-slate-900 dark:border-red-100 dark:text-red-100',
  'ktm': 'bg-orange-100 border-orange-950 text-orange-950 dark:bg-slate-900 dark:border-orange-100 dark:text-orange-100'
}

</script>

<template>
  <div
      :class="ManufacturerMap[make.toLowerCase()]"
      class="flex flex-col justify-between px-24 py-8 shadow-lg rounded-lg items-center self-center
      align-middle border-2 bg-slate-100 border-emerald-900 dark:bg-slate-800 dark:text-slate-200"
  >
    <slot />
  </div>
</template>