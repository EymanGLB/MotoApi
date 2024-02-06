<script setup>
  import Button from "~/components/atoms/Button.vue";

  const colorMode = useColorMode()
  const toggleTheme = () => {
    colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
  }


</script>

<template>
  <Button :uppercase="true" @click="toggleTheme" color="indigo" class="transition-all duration-1000">
    <div class="w-6" v-if="colorMode.preference === 'dark'">
      <nuxt-img src="/images/dark-mode.svg"/>
    </div>
    <div class="w-6" v-else>
      <nuxt-img src="/images/light-mode.svg" />
    </div>
  </Button>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>
