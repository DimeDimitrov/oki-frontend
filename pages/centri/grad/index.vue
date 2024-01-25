<template>
  <h1 class="header">Статистики според испитни центри (градска)</h1>
    <div class="wrapper" >
    <div class="chart-container" v-if="chartData" v-for="(item, index) in chartData">
        <a :href="getLinkForWebsite(item.website)" class="chart-title">{{getNameForWebsite(item.website) }}</a>
        <h2 class="subtitle"> {{ getCityForWebsite(item.website) }}</h2>
        <DonutChart class="chart" :labels="labels" :data="getChartData(item.stats)" :colors="colors"/>
        <h3 class="sample-size">Sample size : ({{ Object.values(item.stats).reduce((a, b) => a + b, 0) }})</h3>
        <a href="">Повеќе...</a>
    </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useApiStore } from '~/store';
import DonutChart from '~/components/DonutChart.vue';
  
const apiStore = useApiStore();
const chartData = ref([])

onMounted(async () => {
chartData.value = apiStore.data.by_website_grad;
});
function getChartData(stats) {
  return Object.values(stats);
}
const labels = ['на прва','на втора','на трета','на 3+']
const websiteMappings = {
  'http://sic1.ddnsfree.com/zsrn/': {
    name: 'Зелен Сигнал-ОКИ',
    link: 'http://www.zelensignal-oki.com.mk/',
    city: 'Велес',
  },
  'http://ics.ddnsfree.com:81/icsrzn1/': {
    name: 'Испитен Центар',
    link: 'https://www.ispitencentarstrumica.mk/',
    city: 'Струмица',
  },
  'http://sic1.ddnsfree.com/svrez1/': {
    name: 'Современ Возач',
    link: 'https://www.sovremenvozacohrid.mk/',
    city: 'Охрид',
  },
  'http://newdriver.hopto.org/ndrez/default.aspx': {
    name: 'Њу Драјвер',
    link: 'http://www.newdriver.mk/',
    city: 'Тетово',
  },
  'http://sic1.ddnsfree.com/ivr1/': {
    name: 'Исток-Возач',
    link: 'https://istokvozac.mk/',
    city: 'Штип',
  },
  'http://www.sicam.mk/termini.aspx': {
    name: 'АМ ДООЕЛ',
    link: 'http://www.sicam.mk/index.html',
    city: 'Битола',
  },
  'http://77.28.103.235/tdrn/': {
    name: 'Топ Драјвер',
    link: 'http://www.topdrajver.mk/',
    city: 'Куманово',
  },
  'http://sicrez.ddns.net:8008/avir1/': {
    name: 'Авто Испитен Центар',
    link: 'https://www.aic.mk/',
    city: 'Скопје',
  },
};

function getWebsiteDetails(website) {
  const defaultDetails = {
    name: website,
    link: '/error',
    city: website,
  };
  return websiteMappings[website] || defaultDetails;
}

function getNameForWebsite(website) {
  return getWebsiteDetails(website).name;
}
function getLinkForWebsite(website) {
  return getWebsiteDetails(website).link;
}
function getCityForWebsite(website) {
  return getWebsiteDetails(website).city;
}
</script>

<style scoped>
.wrapper {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.chart-container {
  margin: 20px;
  padding: 18px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 24rem;
  width: 100%;
}

.chart-title {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.chart {
  max-width: 300px;
  margin: 0 auto;
}

.sample-size {
  margin-top: 0;
  font-size: 1rem;
  color: #888;
}

.subtitle {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 0px;
}

.header {
  text-align: center;
}

@media screen and (max-width: 600px) {
  .chart-container {
    max-width: 100%;
  }

  .chart {
    max-width: 100%;
  }
}
</style>