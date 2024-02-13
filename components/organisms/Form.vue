<script setup lang="ts">
import InputText from "~/components/atoms/InputText.vue";
import Button from "~/components/atoms/Button.vue";
import { watch } from "vue";
import { useMotoApi } from "#imports";

const { manufacturer, model, shouldReset, modifyManufacturer, modifyModel, modifyReset } = useMotoApi()
let canSearch = false

watch([manufacturer, model], () => {
  canSearch = manufacturer.value != '' && model.value != ''
})

const emit = defineEmits(['submitMoto', 'clearMoto'])
const handleSubmit = () => {
  emit('submitMoto', { manufacturer: manufacturer.value, model: model.value })
  modifyManufacturer('');
  modifyModel('');
  // Reset InputText values
  modifyReset(true);
}
modifyReset(false)

const handleClear = () => {
  emit('clearMoto', true)
  modifyReset(true);
  console.log("clearing")
}

const handleManufacturerValue = (arg: string) => {
  modifyManufacturer(arg)
}

const handleModelValue = (arg: string) => {
  modifyModel(arg)
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="flex flex-col gap-5">
    <InputText name="Manufacturer" placeholder="Yamaha" v-model="manufacturer" :shouldReset="shouldReset" @update:model-value="handleManufacturerValue"/>
    <InputText name="Model" placeholder="XTZ 660" v-model="model" :shouldReset="shouldReset" @update:model-value="handleModelValue"/>
    <div class="flex flex-row gap-4 self-center">
      <Button content="Search" :uppercase="true" class="self-center" :is-disabled="!canSearch">Search</Button>
      <Button @click.prevent="handleClear" :uppercase="true" color="indigo">Clear</Button>
    </div>
  </form>
</template>

<style scoped></style>