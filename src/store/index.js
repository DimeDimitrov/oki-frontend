// store/index.js
import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      chartData: [],
    };
  },
  mutations: {
    setChartData(state, data) {
      state.chartData = data;
    },
  },
  actions: {
    async fetchChartData({ commit }) {
      const url = 'http://localhost:3000/stats';
      try {
        const response = await fetch(url);
        const data = await response.json();
        commit('setChartData', data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
  },
});
