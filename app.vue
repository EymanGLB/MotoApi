<script setup>
  import Button from "~/components/atoms/Button.vue";

  const colorMode = useColorMode()
  const toggleTheme = () => {
    colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
  }
</script>

<template>
  <NuxtLayout>
    <Button :uppercase="true" @click="toggleTheme" color="cyan">{{colorMode.value}} mode</Button>
    <NuxtPage/>
  </NuxtLayout>
</template>
