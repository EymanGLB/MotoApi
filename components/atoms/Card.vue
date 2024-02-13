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
  'yamaha': 'bg-blue-100 border-blue-800 text-blue-900 dark:bg-slate-900 dark:border-blue-300 dark:text-blue-200',
  'suzuki': 'bg-yellow-100 border-yellow-800 text-yellow-900 dark:bg-slate-900 dark:border-yellow-300 dark:text-yellow-200',
  'kawasaki': 'bg-emerald-100 border-emerald-800 text-emerald-900 dark:bg-slate-900 dark:border-emerald-300 dark:text-emerald-200',
  'honda': 'bg-red-100 border-red-950 text-red-800 dark:bg-slate-900 dark:border-red-300 dark:text-red-200',
  'ktm': 'bg-orange-100 border-orange-800 text-orange-900 dark:bg-slate-900 dark:border-orange-300 dark:text-orange-200'
}

</script>

<template>
  <div
      :class="ManufacturerMap[make.toLowerCase()]"
      class="flex flex-col justify-between px-24 py-8 shadow-lg shadow-slate-300 rounded-lg items-center self-center
      align-middle border-2 bg-slate-100 border-emerald-900 dark:bg-slate-800 dark:text-slate-200 dark:shadow-slate-700"
  >
    <slot />
  </div>
</template>