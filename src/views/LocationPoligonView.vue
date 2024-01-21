<template>
    <div class="wrapper" >
    <div class="chart-container" v-if="chartData" v-for="(item, index) in chartData">
        <a class="chart-title">{{item.city }}</a>
        <apexchart class="chart" type="donut" width="300" :options="chartOptions" :series="Object.values(item.stats)"></apexchart>
        <h3 class="sample-size">Sample size : ({{ Object.values(item.stats).reduce((a, b) => a + b, 0) }})</h3>
    </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex'

const store = useStore();
const chartData = ref([])

onMounted(async () => {
    if (store.state.chartData.length === 0) {
      await store.dispatch('fetchChartData');
    } 
    chartData.value = store.state.chartData.by_city_poligon;
});

const chartOptions = ref({
    legend: {
        show: false,
    },
    labels: ['на прва', 'на втора', 'на трета', 'на 3+'],
});

</script>

<style scoped>
.wrapper {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  display: flex;
  justify-content: center; /* Center the chart containers horizontally */
  flex-wrap: wrap;
}

.chart-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem;
    padding: 0.2rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    max-width: 24rem;
    width: fit-content;
}

.chart-title {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.chart {
}

.sample-size {
  margin-top: 10px;
  font-size: 1rem;
  color: #888;
}

.subtitle {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 8px;
}

#poveke{

}
</style>