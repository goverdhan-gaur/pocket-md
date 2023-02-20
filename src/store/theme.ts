import { create } from 'zustand'

interface ThemeStore {
    theme: string
    setTheme: (arg: string) => void,
    toggleTheme: () => void
}

export const useThemeStore = create<ThemeStore>()((set) => ({
    theme: 'light',
    setTheme: (arg) => set(() => ({ theme: arg })),
    toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' }))
}))