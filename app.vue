<script lang="ts" setup>
/* STATES */
const $appConfigStore = useAppConfigStore()

useHead({
  title: $appConfigStore.appName,
  titleTemplate: `%s - ${$appConfigStore.appName}`,
})
</script>

<template>
  <Body
    class="antialiased duration-300 transition-colors text-gray-800 bg-white"
  >
    <!-- dark:bg-gray-950 dark:text-gray-200 -->
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
  </Body>
</template>

<style lang="scss" scoped></style>
