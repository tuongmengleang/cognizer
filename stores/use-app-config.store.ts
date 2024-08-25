export interface IAppState {
  appName: string
}

export const useAppConfigStore = defineStore('appStore', {
  state: (): IAppState => ({
    appName: process.env.APP_NAME ?? '',
  }),
})
