<script lang="ts" setup>
/* IMPORTS */
import SplashScreen from '~/@core/components/SplashScreen.vue'
import { useAppConfigStore } from '~/stores/use-app-config.store'

/* STATES */
const nuxtApp = useNuxtApp()
const $appConfigStore = useAppConfigStore()

nuxtApp.hook('page:finish', () => $appConfigStore.onUpdateLoading(false))
</script>

<template>
  <LayoutNavbar />
  <LayoutMain>
    <slot />
  </LayoutMain>

  <SplashScreen v-if="false" />
</template>

<style lang="scss" scoped></style>
