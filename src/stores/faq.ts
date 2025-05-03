import { defineStore } from 'pinia'
import type { FAQ } from '@/core/types/faq'
import FaqService from '@/core/services/FaqService'

interface FaqStore {
  faqs: FAQ[]
  loading: boolean
  error: string | null
}

export const useFaqStore = defineStore('faq', {
  state: (): FaqStore => ({
    faqs: [],
    loading: false,
    error: null,
  }),

  actions: {
    async fetchFaq() {
      this.loading = true
      this.error = null
      try {
        const response = await FaqService.getAll()
        this.faqs = response.data
      } catch (error: any) {
        this.error = error.message || 'Failed to fetch faq'
        console.error('Error fetching faq:', error)
      } finally {
        setTimeout(() => {
          this.loading = false
        }, 3000) // <-- Loading terlihat selama 3 detik
      }
    },
  },
})
