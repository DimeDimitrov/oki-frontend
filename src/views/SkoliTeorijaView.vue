<template>
    <div class="wrapper" >
        <div class="search-wrapper">
        <label for="search">Search</label>
        <input value="search" class="search" type="text" v-model="searchValue" />
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
import { useStore } from 'vuex'

const store = useStore();
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
    if (store.state.chartData.length === 0) {
      await store.dispatch('fetchChartData');
    }
    chartData.value = store.state.chartData.by_school_teorija;
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

}
</style>