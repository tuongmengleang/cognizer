<script lang="ts" setup></script>

<template>
  <header class="absolute inset-x-0 top-0 z-50">
    <nav aria-label="Global" class="flex items-center justify-between p-6 lg:px-8">
      <div class="flex lg:flex-1">
        <a class="-m-1.5 p-1.5" href="#">
          <span class="sr-only">Your Company</span>
          <img alt="" class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600">
        </a>
      </div>
      <div class="flex lg:hidden">
        <button class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" type="button">
          <span class="sr-only">Open main menu</span>
          <svg aria-hidden="true" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.5"
               viewBox="0 0 24 24">
            <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <a class="text-sm font-semibold leading-6 text-gray-900" href="#">Product</a>
        <a class="text-sm font-semibold leading-6 text-gray-900" href="#">Features</a>
        <a class="text-sm font-semibold leading-6 text-gray-900" href="#">Marketplace</a>
        <a class="text-sm font-semibold leading-6 text-gray-900" href="#">Company</a>
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <a class="text-sm font-semibold leading-6 text-gray-900" href="#">Log in <span aria-hidden="true">&rarr;</span></a>
      </div>
    </nav>
    <!-- Mobile menu, show/hide based on menu open state. -->
    <div aria-modal="true" class="lg:hidden">
      <!-- Background backdrop, show/hide based on slide-over state. -->
      <div class="fixed inset-0 z-50"></div>
      <div
        class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between">
          <a class="-m-1.5 p-1.5" href="#">
            <span class="sr-only">Your Company</span>
            <img alt="" class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600">
          </a>
          <button class="-m-2.5 rounded-md p-2.5 text-gray-700" type="button">
            <span class="sr-only">Close menu</span>
            <svg aria-hidden="true" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.5"
                 viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <a
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                href="#">Product</a>
              <a
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                href="#">Features</a>
              <a
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                href="#">Marketplace</a>
              <a
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                href="#">Company</a>
            </div>
            <div class="py-6">
              <a
                class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                href="#">Log
                in</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped></style>
