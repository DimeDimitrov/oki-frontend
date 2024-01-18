<template>
    <div class="wrapper" >
    <div class="chart-container" v-if="chartData" v-for="item in chartData">
        <a :href="getLinkForWebsite(item.origin)" class="chart-title">{{getNameForWebsite(item.origin) }}</a>
        <h2 class="subtitle"> {{ getCityForWebsite(item.origin) }}</h2>
        <apexchart class="chart" type="donut" width="360" :options="chartOptions" :series="item.data"></apexchart>
        <h3 class="sample-size">Sample size : ({{ item.sample_size }})</h3>
    </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const url = 'http://localhost:3000/stats'
let data = {}
const chartData = ref([])

fetch(url).then(res => {
    return res.json();
})
.then(response => {
    data = response
    console.log(data)

    const processedData = data.by_website_teorija.map(item => {
        return {
        origin: item.website,
        data: [
          item.stats.attempts_1,
          item.stats.attempts_2,
          item.stats.attempts_3,
          item.stats.attempts_other,
        ],
        sample_size: item.stats.attempts_1 +
          item.stats.attempts_2 +
          item.stats.attempts_3 +
          item.stats.attempts_other
      };
    })
    chartData.value = processedData;
})

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
  
function getNameForWebsite(website) {
  // You can replace this logic with a mapping or any other logic based on your data
  if (website === 'http://sic1.ddnsfree.com/zsrn/') return 'Зелен Сигнал-ОКИ';
  if (website === 'http://ics.ddnsfree.com:81/icsrzn1/') return 'Испитен Центар';
  if (website === 'http://sic1.ddnsfree.com/svrez1/') return 'Современ Возач';
  if (website === 'http://newdriver.hopto.org/ndrez/default.aspx') return 'Њу Драјвер';
  if (website === 'http://sic1.ddnsfree.com/ivr1/') return 'Исток-Возач';
  if (website === 'http://www.sicam.mk/termini.aspx') return 'АМ ДООЕЛ';
  if (website === 'http://77.28.103.235/tdrn/') return 'Топ Драјвер';
  if (website === 'http://sicrez.ddns.net:8008/avir1/') return 'Авто Испитен Центар';

  // Default to the website if no match is found
  return website;
}
function getLinkForWebsite(website){
  if (website === 'http://sic1.ddnsfree.com/zsrn/') return 'http://www.zelensignal-oki.com.mk/';
  if (website === 'http://ics.ddnsfree.com:81/icsrzn1/') return 'https://www.ispitencentarstrumica.mk/';
  if (website === 'http://sic1.ddnsfree.com/svrez1/') return 'https://www.sovremenvozacohrid.mk/';
  if (website === 'http://newdriver.hopto.org/ndrez/default.aspx') return 'http://www.newdriver.mk/';
  if (website === 'http://sic1.ddnsfree.com/ivr1/') return 'https://istokvozac.mk/';
  if (website === 'http://www.sicam.mk/termini.aspx') return 'http://www.sicam.mk/index.html';
  if (website === 'http://77.28.103.235/tdrn/') return 'http://www.topdrajver.mk/';
  if (website === 'http://sicrez.ddns.net:8008/avir1/') return 'https://www.aic.mk/';

  return '/error'
}
function getCityForWebsite(website) {
  // Mapping city to website based on your data
  const cityMapping = {
    'http://sic1.ddnsfree.com/zsrn/': 'Велес',
    'http://ics.ddnsfree.com:81/icsrzn1/': 'Струмица',
    'http://sic1.ddnsfree.com/svrez1/': 'Охрид',
    'http://newdriver.hopto.org/ndrez/default.aspx': 'Тетово',
    'http://sic1.ddnsfree.com/ivr1/': 'Штип',
    'http://www.sicam.mk/termini.aspx': 'Битола',
    'http://77.28.103.235/tdrn/': 'Куманово',
    'http://sicrez.ddns.net:8008/avir1/': 'Скопје',
  };

  // Return city if found, otherwise default to the website
  return cityMapping[website] || website;
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
</style>