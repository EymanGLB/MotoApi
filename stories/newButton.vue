<script setup lang="ts">

const props = defineProps({
  tagType: {
    type: String,
    required: false,
    default: "button"
  },
  uppercase: {
    type: Boolean,
    required: false,
    default: false
  },
  isDisabled: {
    type: Boolean,
    required: false,
    default: false
  },
  color: {
    type: String,
    required: false,
    default: 'emerald'
  },
  size: {
    type: String,
    required: false,
    default: 'medium'
  }
})


const colorMap = {
  emerald: "text-emerald-950 bg-emerald-500 hover:bg-emerald-700 hover:text-emerald-200 dark:text-emerald-200 dark:bg-emerald-800 hover:dark:text-emerald-800 hover:dark:bg-emerald-200",
  red: "text-red-950 bg-red-500 hover:bg-red-700 hover:text-red-200 dark:text-red-200 dark:bg-red-800 hover:dark:text-red-800 hover:dark:bg-red-200",
  cyan: "text-cyan-950 bg-cyan-500 hover:bg-cyan-700 hover:text-cyan-200 dark:text-cyan-200 dark:bg-cyan-800 hover:dark:text-cyan-800 hover:dark:bg-cyan-200",
  indigo: "text-indigo-950 bg-indigo-500 hover:bg-indigo-700 hover:text-indigo-200 dark:text-indigo-200 dark:bg-indigo-800 hover:dark:text-indigo-800 hover:dark:bg-indigo-200",
  pink: "text-pink-950 bg-pink-500 hover:bg-pink-700 hover:text-pink-200 dark:text-pink-200 dark:bg-pink-800 hover:dark:text-pink-800 hover:dark:bg-pink-200",
  orange: "text-orange-950 bg-orange-500 hover:bg-orange-700 hover:text-orange-200 dark:text-orange-200 dark:bg-orange-800 hover:dark:text-orange-800 hover:dark:bg-orange-200",
  brown: "text-brown-950 bg-brown-500 hover:bg-brown-700 hover:text-brown-200 dark:text-brown-200 dark:bg-brown-800 hover:dark:text-brown-800 hover:dark:bg-brown-200",
  slate: "text-slate-950 bg-slate-500 hover:bg-slate-700 hover:text-slate-200 dark:text-slate-200 dark:bg-slate-800 hover:dark:text-slate-800 hover:dark:bg-slate-200",
  lime: "text-lime-950 bg-lime-500 hover:bg-lime-700 hover:text-lime-200 dark:text-lime-200 dark:bg-lime-800 hover:dark:text-lime-800 hover:dark:bg-lime-200",
  violet: "text-violet-950 bg-violet-500 hover:bg-violet-700 hover:text-violet-200 dark:text-violet-200 dark:bg-violet-800 hover:dark:text-violet-800 hover:dark:bg-violet-200"
}

const sizeMap = {
  small: 'px-2 py-1 text-sm',
  medium: 'px-4 py-2 text-md',
  large: 'px-6 py-3 text-lg',
  xlarge: 'px-8 py-4 text-xl'
}
</script>

<template>
  <component
      :disabled="isDisabled"
      :is="tagType"
      :class="uppercase ? `uppercase ${colorMap[color.toLowerCase()]} ${sizeMap[size.toLowerCase()]}`
        : `${colorMap[color.toLowerCase()]} ${sizeMap[size.toLowerCase()]}`"
      class="w-fit rounded-xl my-2 mx-2 tracking-wider shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]
       disabled:cursor-not-allowed transition-colors text-bold disabled:bg-slate-200
       disabled:hover:text-slate-500 disabled:dark:bg-slate-700 disabled:dark:text-slate-400"
      type="submit"
  >
    <slot/>
  </component>
</template>

<style scoped>

</style>