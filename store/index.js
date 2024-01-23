// store/api.js
import { createPinia, defineStore } from 'pinia';
export const pinia = createPinia();

export const useApiStore = defineStore('api', {
  state: () => ({
    data: null,
  }),
  actions: {
    setData(data) {
      this.data = data;
    },
  },
});
