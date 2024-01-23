<template>
  <div>
    <canvas class="chart" ref="donutChartCanvas"></canvas>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import ChartDataLabels from 'chartjs-plugin-datalabels'
const props = defineProps(['labels', 'data', 'colors']);

const donutChartCanvas = ref(null);

onMounted(() => {
  import('chart.js/auto').then(({ Chart }) => {

    const ctx = donutChartCanvas.value.getContext('2d');
    const donutChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: props.labels,
        datasets: [
          {
            data: props.data,
            backgroundColor: props.colors,
            hoverOffset: 4,
          },
        ],
      },
      plugins: [ChartDataLabels],
      options: {
        aspectRatio: 1.3,
        animation: {
          duration: 1000,
          easing: ""
        },
        plugins: {
          datalabels: {
            textShadowBlur: 1,
            textShadowColor: '#000000',
            textStrokeWidth: 0.2,
            textStrokeColor: 'white',
            color: 'white',
            formatter: (value, context) => {
              const total = context.dataset.data.reduce((acc, val) => acc + val, 0);
              const percentage = ((value / total) * 100).toFixed(1);
              return percentage !== '0.0' && percentage >= 2 ? percentage + '%' : '';
            },
          },
          legend: {
            display: true,
            position: 'right',
            labels: {
              usePointStyle: true,
            }
          },
          
        },
        cutout: '64%',
      },

    });
  });
});
</script>