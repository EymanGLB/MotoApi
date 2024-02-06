<script setup lang="ts">
import InputText from "~/components/atoms/InputText.vue";
import Button from "~/components/atoms/Button.vue";
import {watch} from "vue";

const manufacturer = ref('')
const model = ref('')
let canSearch = false

watch([manufacturer, model], () => {
  canSearch = manufacturer.value != '' && model.value != ''
})

const emit = defineEmits(['submitMoto'])
const handleSubmit = () => {
  emit('submitMoto', { manufacturer: manufacturer.value, model: model.value })

  manufacturer.value = ''
  model.value = ''
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="flex flex-col gap-5">
    <InputText name="Manufacturer" placeholder="Yamaha" v-model:model-value="manufacturer"/>
    <InputText name="Model" placeholder="XTZ 660" v-model:model-value="model"/>
    <Button content="Search" :uppercase="true" class="self-center" :is-disabled="!canSearch">Search</Button>
  </form>

</template>

<style scoped>

</style>