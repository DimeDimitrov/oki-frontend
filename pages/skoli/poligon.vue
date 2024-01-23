<template>
    <div class="wrapper" >
        <div class="search-wrapper">
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
</style>