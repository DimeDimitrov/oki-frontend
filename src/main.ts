
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueApexCharts from "vue3-apexcharts";
import store from './store/index.js';
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';


const app = createApp(App)
app.use(VueApexCharts);
app.use(router)
app.use(store)
app.component('EasyDataTable', Vue3EasyDataTable);
app.mount('#app')

