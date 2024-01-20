<template>
  <div class="wrapper">
    <div class="title">
      <a :href="getLinkForWebsite(index)" class="chart-title">{{getNameForWebsite(index) }}</a>
      <h2 class="subtitle"> {{ getCityForWebsite(index) }}</h2>
    </div>
    <div class="description">
        <h1>% шанси да поминеш според ден</h1>
        <apexchart class="chart" type="bar" width="500" :options="chartOptions" :series="[ { data: chartData } ]"></apexchart>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

const route = useRoute();
const store = useStore();

const chartData = ref([]);
let index = ref(0)

onMounted(async () => {
  const website = decodeURIComponent(route.params.website);
  index = route.params.website;

  if (store.state.chartData.length === 0) {
    await store.dispatch('fetchChartData');
  }
  chartData.value = Object.values(store.state.chartData.by_week_grad[index].stats).map(day => day.pass_rate.toFixed(2));
});

const chartOptions = ref({
  chart: {
    width: 500,
    type: 'bar',
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '70%',
    },
  },
  xaxis: {
    categories: ['Понеделник', 'Вторник', 'Среда', 'Четврток', 'Петок'],
  },
  yaxis: {
    max: 100,
    labels: {
      formatter: function (value) {
        return value + '%';
      },
    },
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: 'bottom',
        },
      },
    },
  ],
});

const websiteMappings = [
  {
    website: 'http://sic1.ddnsfree.com/zsrn/',
    name: 'Зелен Сигнал-ОКИ',
    link: 'http://www.zelensignal-oki.com.mk/',
    city: 'Велес',
  },
  {
    website: 'http://ics.ddnsfree.com:81/icsrzn1/',
    name: 'Испитен Центар',
    link: 'https://www.ispitencentarstrumica.mk/',
    city: 'Струмица',
  },
  {
    website: 'http://sic1.ddnsfree.com/svrez1/',
    name: 'Современ Возач',
    link: 'https://www.sovremenvozacohrid.mk/',
    city: 'Охрид',
  },
  {
    website: 'http://newdriver.hopto.org/ndrez/default.aspx',
    name: 'Њу Драјвер',
    link: 'http://www.newdriver.mk/',
    city: 'Тетово',
  },
  {
    website: 'http://sic1.ddnsfree.com/ivr1/',
    name: 'Исток-Возач',
    link: 'https://istokvozac.mk/',
    city: 'Штип',
  },
  {
    website: 'http://www.sicam.mk/termini.aspx',
    name: 'АМ ДООЕЛ',
    link: 'http://www.sicam.mk/index.html',
    city: 'Битола',
  },
  {
    website: 'http://77.28.103.235/tdrn/',
    name: 'Топ Драјвер',
    link: 'http://www.topdrajver.mk/',
    city: 'Куманово',
  },
  {
    website: 'http://sicrez.ddns.net:8008/avir1/',
    name: 'Авто Испитен Центар',
    link: 'https://www.aic.mk/',
    city: 'Скопје',
  },
];
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
.title{
  margin-top: 4rem;
}
  .chart-title {
  font-size: 3rem;
  margin-bottom: 10px;
}

.sample-size {
  margin-top: 10px;
  font-size: 1rem;
  color: #888;
}

.subtitle {
  font-size: 2rem;
  color: #555;
  margin-bottom: 8px;
}
.wrapper{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>