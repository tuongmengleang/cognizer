<script lang="ts" setup>
/* IMPORTS */
import SwiperBanner from '~/@core/components/pages/SwiperBanner.vue'
import GridCard from '~/@core/components/pages/GridCard.vue'
import BaseTitle from '~/@core/components/BaseTitle.vue'

definePageMeta({
  layout: 'default',
})
</script>

<template>
  <!-- 👉🏼Swiper Images -->
  <SwiperBanner />

  <!-- 👉🏼Grid News Card -->
  <div class="fixed-width my-7">
    <BaseTitle class="mb-4" text="News" />
    <ul class="grid grid-cols-3 gap-4">
      <!-- Large block (1) -->
      <li class="col-span-2 bg-gray-300 h-64 flex items-center justify-center">
        <span class="text-black font-bold text-2xl">1</span>
      </li>
      <!-- Right side blocks (2, 3, 4, 5) -->
      <li class="bg-gray-300 h-32 flex items-center justify-center">
        <span class="text-black font-bold text-2xl">2</span>
      </li>
      <li class="bg-gray-300 h-32 flex items-center justify-center">
        <span class="text-black font-bold text-2xl">3</span>
      </li>
      <li class="bg-gray-300 h-32 flex items-center justify-center">
        <span class="text-black font-bold text-2xl">4</span>
      </li>
      <li class="bg-gray-300 h-32 flex items-center justify-center">
        <span class="text-black font-bold text-2xl">5</span>
      </li>
    </ul>
  </div>
  <div class="fixed-width py-7">
    <GridCard />
  </div>

  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
  </ul>
</template>

<style lang="scss" scoped></style>
