import { create } from 'zustand'

const useAuthStore = create((set) => ({
    user: null,
    setUser: (data) => set(() => ({
        user: data.user
    }))
}))

export default useAuthStore
