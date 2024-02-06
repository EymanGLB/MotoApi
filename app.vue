<script setup>
  import Button from "~/components/atoms/Button.vue";

  const colorMode = useColorMode()
  const toggleTheme = () => {
    colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
  }
</script>

<template>
  <Button :uppercase="true" @click="toggleTheme" color="cyan">{{ colorMode.value === 'dark' ? 'light' : 'dark' }} mode</Button>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>
