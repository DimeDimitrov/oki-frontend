<template>
    <div class="wrapper" >
        <div class="search-wrapper">
        <p class="text">Овде може да пребарате разни возачки училишта и како тие перформираат на тестовите.</p>
        <p class="text">Pass rate се калкулира според % на поминати луѓе од кандидатите во еден ден од тоа школо</p>
        <label for="search">Search</label>
        <input class="search" type="text" v-model="searchValue" />
        </div>
        <EasyDataTable
            class="datatable"
            :headers="headers"
            :items="chartData"
            :search-value="searchValue"
            :buttons-pagination="true"
        />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useApiStore } from '~/store';
useSeoMeta({
  title: 'Статистики според школи (полигон)',
  description: 'Откриј трендови во разни испитни центри и на кој обид минат луѓето во градовите. Одберете ги најдобрите возачки училишта според вистински резултати.',
  ogTitle: 'Статистики според школи (полигон)',
  ogDescription: 'Откриј трендови во разни испитни центри и на кој обид минат луѓето во градовите. Одберете ги најдобрите возачки училишта според вистински резултати.',
  ogUrl: "https://vozackiispiti.com",
  ogLocale: "mk_MK",
  ogSiteName: "Статистики за возачки испити",
  ogImage: "/banner.webp",
  twitterCard: 'summary_large_image',
})
const store = useApiStore();
const chartData = ref([])

const searchValue = ref("");
const headers = [
      { text: "Школо", value: "school", sortable: true },
      { text: "Total attempts", value: "stats.total_attempts", sortable: true },
      { text: "Passed attempts", value: "stats.passed_attempts", sortable: true },
      { text: "Pass rate (%)", value: "stats.pass_rate", sortable: true },
      { text: "Location", value: "location", sortable: true }
    ];

onMounted(async () => {
    chartData.value = store.data.by_school_poligon;
});


</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.datatable{
    width: 70%;
}
.search{
    margin: 1rem;
}
.text{
    max-width: 1300px;
    text-align: center;
    line-height: 0.8rem;
}
@media screen and (max-width: 768px) {
  .datatable{
    width: 100%;
  }
}
</style>