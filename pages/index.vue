<script setup>
import Form from "~/components/organisms/Form.vue";
import Spinner from "~/components/atoms/Spinner.vue";
import MotoCard from "~/components/organisms/MotoCard.vue";
import { useMotoApi } from "~/composables/MotoApi";

const { isLoading, motos, shouldReset, getMotos, modifyManufacturer, modifyModel, modifyReset } = useMotoApi();

const handleFormSubmit = async (values) => {
  modifyManufacturer(values.manufacturer);
  modifyModel(values.model);
  await getMotos();
  modifyManufacturer('');
  modifyModel('');
  modifyReset(true)
}

const handleClear = () => {
  motos.value = {}
  modifyReset(true)
}
</script>

<template>
  <div>
    <Form @submitMoto="handleFormSubmit" @clearMoto="handleClear" />
    <div class="flex flex-col justify-between gap-10 mx-5 py-10">
      <div v-if="isLoading" class="flex flex-col w-full justify-center items-center">
        <Spinner />
      </div>
      <div v-for="(moto, index) in motos" :key="index">
        <MotoCard :moto="moto" />
      </div>
    </div>
  </div>
</template>
