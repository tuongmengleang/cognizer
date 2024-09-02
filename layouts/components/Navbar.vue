<script lang="ts" setup>
import BtnBurger from '~/layouts/components/BtnBurger.vue'
import DrawerNavbar from '~/layouts/components/DrawerNavbar.vue'

/* STATES */
const $appStore = useAppConfigStore()
const logo = ref<string>(
  'https://english.pku.edu.cn/Uploads/Bden/Picture/2020/11/25/s5fbdbf048bc00.png'
)
</script>

<template>
  <nav :style="{ '--navbar-height': $appStore.navbarHeight }" class="navbar">
    <div class="navbar-top">
      <ul class="navbar-top--menus">
        <li>
          <a>Identity</a>
        </li>
        <li>
          <a>Giving</a>
        </li>
        <li>
          <a>Old</a>
        </li>
      </ul>
    </div>
    <div class="navbar-base">
      <!-- Logo -->
      <img
        v-if="false"
        alt="Logo"
        class="navbar-base--logo"
        src="https://t3.ftcdn.net/jpg/04/91/76/62/360_F_491766294_h4j7LbW2YgfbNHhq7F8GboIc1XyBSEY5.jpg"
      />
      <img :src="logo" alt="Logo" class="navbar-base--logo" />

      <ul class="navbar-base--menus">
        <li v-for="({ title }, $i) in $appStore.menus" :key="$i">
          <a>{{ title }}</a>
        </li>
        <li>
          <a
            class="block w-8 h-8 grid place-items-center bg-primary-600 rounded-full"
          >
            <Icon class="text-xl text-white" name="ph:magnifying-glass-bold" />
          </a>
        </li>
      </ul>

      <div class="navbar-base--drawer">
        <BtnBurger />
        <Teleport to="#teleports">
          <DrawerNavbar />
        </Teleport>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@import '@/@core/scss/_mixins.scss';

.navbar {
  @apply block w-full h-5 fixed top-0 z-50;

  &::before {
    content: '';
    @apply absolute top-0 w-full h-[var(--navbar-height)] z-[-1]
    bg-gradient-to-b from-black/70 to-transparent;
  }

  &-top {
    @apply w-full h-8 flex items-center justify-end px-4 md:px-10 lg:px-20;

    &--menus {
      @apply flex items-center divide-x divide-gray-500;

      li {
        @apply block px-7 text-sm text-gray-200 font-medium;
        a {
          @apply block w-full h-full;
        }

        &:first-child {
          @apply pl-0;
        }

        &:last-child {
          @apply pr-0;
        }
      }
    }
  }

  &-base {
    @apply w-full flex items-center justify-between px-4 md:px-10 lg:px-20 py-4;

    &--logo {
      @apply w-auto h-10 object-cover;
    }

    &--menus {
      @apply hidden md:flex items-center gap-4 lg:gap-7 xl:gap-10;

      li {
        @apply text-sm lg:text-base xl:text-lg text-gray-100 font-semibold tracking-wider cursor-pointer;
        //font-size: clamp(0.75rem, 0.4821rem + 0.8571vw, 1.125rem);
      }
    }

    &--drawer {
      @apply block md:hidden;
    }
  }
}
</style>
