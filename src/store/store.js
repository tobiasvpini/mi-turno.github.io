import { defineStore } from 'pinia'

export const languageStore = defineStore('lang', {
    state: () => ({ lang: 'es' }),
    getters: {
      _lang: (state) => state.lang,
    },
    actions: {
      CHANGE_LANG(payload) {
        this.lang = payload.lang
      },
    },
  })