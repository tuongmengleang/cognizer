<script lang="ts" setup>
/* IMPORTS */
import { useAppConfigStore } from '~/stores/use-app-config.store'

/* STATES */
const $appConfigStore = useAppConfigStore()
</script>

<template>
  <div
    v-if="$appConfigStore.activeDrawer"
    class="drawer-navbar--overlay"
    @click="$appConfigStore.onUpdateActiveDrawer(false)"
  />
  <Transition name="slide-up">
    <div
      v-if="$appConfigStore.activeDrawer"
      :style="{ '--navbar-height': $appConfigStore.navbarHeight }"
      class="drawer-navbar--content"
    >
      <ul class="drawer-navbar--content--menus">
        <li v-for="({ title }, $key) in $appConfigStore.menus" :key="$key">
          <a>{{ title }}</a>
        </li>
      </ul>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
.drawer-navbar--overlay {
  @apply fixed w-full h-full top-0 bg-gray-700/50 z-[99];
}

.drawer-navbar--content {
  @apply fixed bottom-0 w-full bg-white dark:bg-gray-900 z-[999] text-white;
  height: calc(100vh - var(--navbar-height));

  &--menus {
    @apply flex flex-col gap-5 w-full p-7 text-xl;

    li {
      @apply text-gray-700 dark:text-white font-semibold;
    }
  }
}

/* Transition classes for the slide-up effect */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.3s ease-out;
}

.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
}

.slide-up-enter-to,
.slide-up-leave-from {
  transform: translateY(0%);
}
</style>
