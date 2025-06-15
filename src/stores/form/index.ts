import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { FormFields } from './types'

export default defineStore('form', () => {
  const about = ref<FormFields>({ name: '', age: '' })
  const childs = ref<FormFields[]>([])

  return {
    about,
    childs
  }
})