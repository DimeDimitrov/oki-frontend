<template>
    <div class="wrapper" >
    <div v-if="chartData" v-for="item in chartData">
        <h1>{{ item.name }}</h1>
        <apexchart type="donut" width="380" :options="chartOptions" :series="item.data"></apexchart>
        <h3>Sample size : ({{ item.sample_size }})</h3>
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

    const processedData = data.by_website.map(item => {
        return {
        name: getNameForWebsite(item.website),
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
  if (website === 'http://sic1.ddnsfree.com/zsrn/') return 'Зелен Сигнал-ОКИ - Велес';
  if (website === 'http://ics.ddnsfree.com:81/icsrzn1/') return 'Испитен Центар - Струмица';
  if (website === 'http://sic1.ddnsfree.com/svrez1/') return 'Современ Возач - Охрид';
  if (website === 'http://newdriver.hopto.org/ndrez/default.aspx') return 'Њу Драјвер - Тетово';
  if (website === 'http://sic1.ddnsfree.com/ivr1/') return 'Исток-Возач - Штип';
  if (website === 'http://www.sicam.mk/termini.aspx') return 'АМ ДООЕЛ - Битола';
  if (website === 'http://77.28.103.235/tdrn/') return 'Топ Драјвеер - Куманово';
  if (website === 'http://sicrez.ddns.net:8008/avir1/') return 'Авто Испитен Центар - Скопје';

  // Default to the website if no match is found
  return website;
}
</script>
<style scoped>
.wrapper{
    display: flex;
    flex-wrap: wrap;
}
</style>