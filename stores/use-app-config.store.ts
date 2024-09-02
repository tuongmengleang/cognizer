export interface IMenuItem {
  value: string
  title: string
  path?: string
  icon?: string
}

export interface IAppState {
  appName: string
  menus: Array<IMenuItem>
  navbarHeight: number | string
  loading: boolean
  activeDrawer: boolean
}

export const useAppConfigStore = defineStore('appStore', {
  state: (): IAppState => ({
    appName: process.env.APP_NAME ?? '',
    menus: [
      {
        value: 'about',
        title: 'About',
      },
      {
        value: 'news_events',
        title: 'News & Events',
      },
      {
        value: 'admission',
        title: 'Admission',
      },
      {
        value: 'schools',
        title: 'Schools',
      },
      {
        value: 'research',
        title: 'Research',
      },
      {
        value: 'faculty',
        title: 'Faculty',
      },
      {
        value: 'campus',
        title: 'Campus',
      },
    ],
    navbarHeight: 0,
    loading: false,
    activeDrawer: false,
  }),
  actions: {
    onUpdateLoading(value: boolean): void {
      this.loading = value
    },
    onUpdateActiveDrawer(value: boolean): void {
      this.activeDrawer = value
    },
    onToggleActiveDrawer(): void {
      this.activeDrawer = !this.activeDrawer
    },
  },
})
