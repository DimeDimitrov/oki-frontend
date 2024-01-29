<template>
  <h1 class="header">Статистики според град (градска)</h1>
  <p class="text">Оваа страница ви прикажува детални статистики за успешно положените возачки испити во градовите во Македонија. Прегледајте ги графиците за колку пати им треба на луѓето да положат (на прва, на втора, на трета, на 3+ обиди) и дознајте повеќе за успешноста и предизвиците на возачите.</p>
  <div class="wrapper" >
  <div class="chart-container" v-if="chartData" v-for="(item, index) in chartData">
      <a class="chart-title">{{item.city }}</a>
      <DonutChart class="chart" hideLegend="true" :labels="labels" :data="getChartData(item.stats)" />
      <h3 class="sample-size">Sample size : ({{ Object.values(item.stats).reduce((a, b) => a + b, 0) }})</h3>
  </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useApiStore } from '~/store';

useSeoMeta({
  title: 'Статистики според град (теорија)',
  description: 'Откриј трендови во разни испитни центри и на кој обид минат луѓето во градовите. Одберете ги најдобрите возачки училишта според вистински резултати.',
  ogTitle: 'Статистики според град (теорија)',
  ogDescription: 'Откриј трендови во разни испитни центри и на кој обид минат луѓето во градовите. Одберете ги најдобрите возачки училишта според вистински резултати.',
  ogUrl: "https://vozackiispiti.com",
  ogLocale: "mk_MK",
  ogSiteName: "Статистики за возачки испити",
  ogImage: "/banner.png",
  twitterCard: 'summary_large_image',
})


const store = useApiStore();
const chartData = ref([])

onMounted(async () => {
  chartData.value = store.data.by_city_teorija;
});

function getChartData(stats) {
  return Object.values(stats);
}
const labels = ['на прва','на втора','на трета','на 3+']
const colors = ['#008ffb', '#00E396', '#FEB019', '#FF4560']
</script>

<style scoped>
.wrapper {
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
display: flex;
justify-content: center; /* Center the chart containers horizontally */
flex-wrap: wrap;
}

.chart-container {
  background-color: white;
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

.text{
  text-align: center;
  max-width: 800px;
  margin: auto;
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
</style>