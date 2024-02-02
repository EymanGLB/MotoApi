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
  variant: {
    type: String,
    required: false,
    default: 'emerald'
  }
})
const VariantMap = {
  emerald: "text-emerald-950 bg-emerald-500 hover:bg-emerald-700 hover:text-emerald-200",
  red: "text-red-950 bg-red-500 hover:bg-red-700 hover:text-red-200",
  cyan: "text-cyan-950 bg-cyan-500 hover:bg-cyan-700 hover:text-cyan-200"
}
</script>

<template>
  <component
      :is="tagType"
      :class="uppercase ? `uppercase ${VariantMap[variant.toLowerCase()]}` : VariantMap[variant.toLowerCase()]"
      class="w-fit rounded-xl my-2 mx-2 px-4 py-2 tracking-wider shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]
       disabled:cursor-not-allowed transition-colors text-bold "
      :disabled="isDisabled"
      type="submit"
      v-bind="$attrs"
  >
    <slot />
  </component>
</template>