<template>
    <h1 class="header">Статистики за возачки испити</h1>
    <div class="wrapper" >
    <div class="chart-container" v-if="chartData" v-for="item in chartData">
        <a :href="getLinkForWebsite(item.type)" class="chart-title">{{ item.type }}</a>
        <apexchart class="chart" type="donut" width="360" :options="chartOptions" :series="Object.values(item.stats)"></apexchart>
        <h3 class="sample-size">Sample size : ({{ Object.values(item.stats).reduce((a, b) => a + b, 0) }})</h3>
    </div>
    </div>
    <h3 id="latest">Data updated : {{ chartData.latest_date }}</h3>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex'

const store = useStore()
const chartData = ref([])

onMounted(async () => {
    if (store.state.chartData.length === 0) {
      await store.dispatch('fetchChartData');
    }
    chartData.value = store.state.chartData.home;
    chartData.value.latest_date = store.state.chartData.latest_date
});

const chartOptions = ref({
    chart: {
        width: 380,
    type: 'donut',
    },
    labels: ['на прва', 'на втора', 'на трета', 'на 3+'],
    responsive: [{
        breakpoint: 480,
        options: {
        chart: {
            width: 200
        },
        legend: {
            position: 'bottom'
        }
        }
    }]
});
function getLinkForWebsite(website){
  if (website === 'Теорија') return '/teorija';
  if (website === 'Град') return '/grad';
  if (website === 'Полигон') return '/poligon';

  return '/error'
}
</script>

<style scoped>
.wrapper {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  display: flex;
  justify-content: center; /* Center the chart containers horizontally */
  flex-wrap: wrap;
}

.chart-container {
  margin: 20px;
  padding: 18px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 24rem; /* Limit the maximum width of each container */
  width: 100%; /* Take up 100% width of the parent container */
}

.chart-title {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.chart {
  max-width: 400px;
  margin: 0 auto;
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

.header{
    text-align: center;
}

#latest{
    text-align: right;
    margin-right: 4rem;
    font-size: 1rem;
    color: gray;
}
</style>