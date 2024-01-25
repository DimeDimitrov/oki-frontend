<template>
  <h1 class="header">Статистики според испитни центри (градска)</h1>
    <div class="wrapper" >
    <div class="chart-container" v-if="chartData" v-for="(item, index) in chartData">
        <div class="chart-top">
          <a :title="getNameForWebsite(item.website)" :href="getLinkForWebsite(item.website)" class="chart-title"><img class="chart-image" :src="getImageForWebsite(item.website)" :alt="getNameForWebsite(item.website)"></a>
        </div>
        <DonutChart class="chart" :labels="labels" :data="getChartData(item.stats)" :colors="colors"/>
        <h3 class="sample-size">Sample size: ({{ Object.values(item.stats).reduce((a, b) => a + b, 0) }})</h3>
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
chartData.value = apiStore.data.by_website_poligon;
});
function getChartData(stats) {
  return Object.values(stats);
}
const labels = ['на прва','на втора','на трета','на 3+']
const websiteMappings = {
  'http://sic1.ddnsfree.com/zsrn/': {
    name: 'Зелен Сигнал ОКИ - Велес',
    link: 'http://www.zelensignal-oki.com.mk/',
    city: 'Велес',
    image: '/cities/veles.webp'
  },
  'http://ics.ddnsfree.com:81/icsrzn1/': {
    name: 'Испитен Центар - Струмица',
    link: 'https://www.ispitencentarstrumica.mk/',
    city: 'Струмица',
    image: '/cities/strumica.webp'
  },
  'http://sic1.ddnsfree.com/svrez1/': {
    name: 'Современ Возач - Охрид',
    link: 'https://www.sovremenvozacohrid.mk/',
    city: 'Охрид',
    image: '/cities/ohrid.webp'
  },
  'http://newdriver.hopto.org/ndrez/default.aspx': {
    name: 'Њу Драјвер - Тетово',
    link: 'http://www.newdriver.mk/',
    city: 'Тетово',
    image: '/cities/tetovo.webp'
  },
  'http://sic1.ddnsfree.com/ivr1/': {
    name: 'Исток-Возач - Штип',
    link: 'https://istokvozac.mk/',
    city: 'Штип',
    image: '/cities/shtip.webp'
  },
  'http://www.sicam.mk/termini.aspx': {
    name: 'АМ ДООЕЛ - Битола',
    link: 'http://www.sicam.mk/index.html',
    city: 'Битола',
    image: '/cities/bitola.webp'
  },
  'http://77.28.103.235/tdrn/': {
    name: 'Топ Драјвер - Куманово',
    link: 'http://www.topdrajver.mk/',
    city: 'Куманово',
    image: '/cities/kumanovo.webp'
  },
  'http://sicrez.ddns.net:8008/avir1/': {
    name: 'Авто Испитен Центар - Скопје',
    link: 'https://www.aic.mk/',
    city: 'Скопје',
    image: '/cities/skopje.webp'
  },
};

function getWebsiteDetails(website) {
  const defaultDetails = {
    name: website,
    link: '/error',
    city: website,
    image: website,
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
function getImageForWebsite(website) {
  return getWebsiteDetails(website).image;
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
  background-color: white;
  margin: 20px;
  padding: 18px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 24rem;
  width: 100%;
}
.chart-top{
  height: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.chart-title {
  font-size: 1.5rem;
  margin-bottom: 10px;
}
.chart-image{
  width: 100%;
  max-width: 100%;
}
.chart {
  max-width: 300px;
  margin: 0 auto;
}

.sample-size {
  margin-top: 0;
  margin-bottom: 0;
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