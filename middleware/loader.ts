import { useAppConfigStore } from '~/stores/use-app-config.store'

export default defineNuxtRouteMiddleware((to, from) => {
  const $appConfigStore = useAppConfigStore()

  // Show loader when navigating to a new page
  if (from.path !== to.path) $appConfigStore.onUpdateLoading(true)
})
