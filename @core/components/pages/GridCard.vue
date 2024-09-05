<script lang="ts" setup>
/* STATES */
const cards = ref([
  'https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/2305098/pexels-photo-2305098.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/3761504/pexels-photo-3761504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/3769017/pexels-photo-3769017.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
])
</script>

<template>
  <div class="grid-layout">
    <!-- 👉🏼Card -->
    <div v-for="$item in cards" :key="$item" class="card">
      <div class="card-image">
        <img :src="$item" alt="" />
      </div>
      <div class="card-content">
        <p class="title">When life gives you oranges</p>
        <span class="subtitle">
          Our Equilibrium collection promotes balance and calm.
        </span>
      </div>
      <div class="divider" />
      <div class="card-footer">
        <div class="flex items-center">
          <Icon class="mr-2" name="solar:eye-broken" />
          <span class="text-sm text-gray-500 font-medium">24k</span>
        </div>
        <div class="flex items-center">
          <Icon class="mr-2" name="solar:calendar-minimalistic-broken" />
          <span class="text-sm text-gray-500 font-medium">Jul 26, 2019</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.grid-layout {
  @apply grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4;
}

.card {
  @apply w-full p-3 rounded-lg;
  //border border-gray-100 shadow-lg shadow-gray-200

  &-image {
    @apply rounded-md overflow-hidden;

    img {
      @apply w-full h-full object-cover;
    }
  }

  &-content {
    @apply pt-4 pb-2;

    .title {
      @apply text-lg text-gray-700 font-semibold;
    }

    .subtitle {
      @apply text-sm text-gray-500 font-medium;
    }
  }

  .divider {
    @apply w-full h-px my-2 bg-gray-100;
  }

  &-footer {
    @apply flex items-center gap-5;
  }
}
</style>
