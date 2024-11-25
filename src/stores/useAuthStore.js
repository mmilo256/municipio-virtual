import { create } from 'zustand'

const useAuthStore = create((set) => ({
    user: null,
    setUser: (data) => set({
        user: data?.user || data
    })
}))

export default useAuthStore
