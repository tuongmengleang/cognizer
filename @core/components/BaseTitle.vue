<script lang="ts" setup>
defineProps<{
  text: string
}>()
</script>

<template>
  <div class="base-title">
    <h6>{{ text }}</h6>
  </div>
</template>

<style lang="scss" scoped>
.base-title {
  @apply relative text-2xl text-gray-700 font-semibold tracking-wide;

  &:before {
    content: '';
    @apply absolute bottom-0 w-40 h-1 rounded bg-gradient-to-r from-cyan-500 to-blue-500;
  }
}
</style>
