<script lang="ts" setup>
import { useAppConfigStore } from '~/stores/use-app-config.store'

/* STATES */
const $appConfigStore = useAppConfigStore()
</script>

<template>
  <div class="loader">
    <!-- Your loader markup here, e.g., spinner or progress bar -->
    <div class="spinner"></div>
  </div>
</template>

<style lang="scss" scoped>
.loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
}

.spinner {
  /* Example spinner styling */
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #000;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
