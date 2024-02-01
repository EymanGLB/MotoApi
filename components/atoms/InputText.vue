<script setup lang="ts">
import {computed} from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    required: true
  },
  modelValue: {
    type: String,
    required: true,
    default: ''
  }
})


const labelName = computed(
    () => {
      const firstLetter = props.name!.charAt(0).toUpperCase();
      const remainingLetters = props.name!.slice(1);
      return firstLetter + remainingLetters;
    }
)

</script>

<template>
  <div class="w-fit flex flex-row gap-5 items-center">
    <label
        :for="name"
        class="font-bold"
    >
      {{ labelName }}:
    </label>
    <input
        @input="$emit('update:modelValue', $event.target.value)"
        type="text"
        :placeholder="placeholder"
        class="text-emerald-950 px-2 py-0.5 rounded border-slate-300 border outline-emerald-400"
        :id="name"
    />
  </div>
</template>

<style scoped>

</style>