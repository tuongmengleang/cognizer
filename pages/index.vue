<script lang="ts" setup>
/* IMPORTS */
import SwiperBanner from '~/@core/components/pages/SwiperBanner.vue'
import GridCard from '~/@core/components/pages/GridCard.vue'

definePageMeta({
  layout: 'default',
})
</script>

<template>
  <!-- 👉🏼Swiper Images -->
  <SwiperBanner />

  <!-- 👉🏼Grid News Card -->
  <div class="fixed-width py-7">
    <GridCard />
  </div>
</template>

<style lang="scss" scoped></style>
