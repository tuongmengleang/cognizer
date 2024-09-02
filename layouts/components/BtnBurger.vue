<script lang="ts" setup>
import { useAppConfigStore } from '~/stores/use-app-config.store'
/* STATES */
const $appConfigStore = useAppConfigStore()
</script>

<template>
  <button
    :class="{ 'is-closed': $appConfigStore.activeDrawer }"
    class="btn-burger"
    type="button"
    @click="$appConfigStore.onToggleActiveDrawer()"
  >
    <span class="btn-burger--inner">
      <svg viewBox="0 0 32 32">
        <path
          class="line line-top-bottom"
          d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
        />
        <path class="line" d="M7 16 27 16" />
      </svg>
    </span>
  </button>
</template>

<style lang="scss" scoped>
.btn-burger {
  scale: 1.3;
  height: 30px;

  &--inner {
    svg {
      /* The size of the SVG defines the overall size */
      height: 30px;
      //transform: translate(-1px, -1px);
      /* Define the transition for transforming the SVG */
      transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);

      .line {
        fill: none;
        stroke: white;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 1.75;
        /* Define the transition for transforming the Stroke */
        transition:
          stroke-dasharray 500ms cubic-bezier(0.4, 0, 0.2, 1),
          stroke-dashoffset 500ms cubic-bezier(0.4, 0, 0.2, 1);
      }

      .line-top-bottom {
        stroke-dasharray: 12 63;
      }
    }
  }

  &.is-closed {
    svg {
      transform: rotate(-45deg) translate(0);

      .line-top-bottom {
        stroke-dasharray: 20 300;
        stroke-dashoffset: -32.42;
      }
    }
  }
}
</style>
