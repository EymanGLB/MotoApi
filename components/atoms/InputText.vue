<script setup lang="ts">

import {watch} from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    required: true
  },
  shouldReset: Boolean
})

const localValue = ref('')
const emitValue = () => {
  emit('update:modelValue', localValue.value)
}
const emit = defineEmits(['update:modelValue'])

// Wathc for changes on the shouldReset value
watch(() => props.shouldReset, (newValue) => {
  if (newValue) {
    // Reset the input value when the prop is true
    localValue.value = '';
  }
});
</script>

<template>
  <div class="w-auto flex flex-row justify-between items-center">
    <label
        :for="name"
        class="font-bold"
    >
      {{ name }}:
    </label>
    <input
        v-model="localValue"
        @input="emitValue"
        type="text"
        :placeholder="placeholder"
        class="text-emerald-950 px-2 py-0.5 rounded border-slate-300 border outline-emerald-400 focus:border-slate-950
        dark:bg-slate-800 dark:text-slate-50"
        :id="name"
    />
  </div>
</template>

<style scoped>

</style>