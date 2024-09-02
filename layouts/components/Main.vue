<script lang="ts" setup>
/* IMPORTS */
import { useAppConfigStore } from '~/stores/use-app-config.store'

/* STATES */
const $appStore = useAppConfigStore()

/* METHODS */
const onGetNavbarHeight = (): void => {
  const navbarTop = document.querySelector('.navbar-top') as HTMLElement
  const navbarBase = document.querySelector('.navbar-base') as HTMLElement

  $appStore.navbarHeight =
    navbarTop?.offsetHeight + navbarBase?.offsetHeight + 'px'
}

onMounted(() => onGetNavbarHeight())
</script>

<template>
  <main
    id="main"
    :style="{ '--navbar-height': $appStore.navbarHeight }"
    class="main"
  >
    <slot />
  </main>
</template>

<style lang="scss" scoped>
#main {
  //padding-top: var(--navbar-height);
}
</style>
