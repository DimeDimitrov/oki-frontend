<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
    <div class="wrapper">

      <nav class="navbar">
        <img src="/logo.png" alt="Logo" class="logo" />

        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/grad">Град</RouterLink>
        <RouterLink to="/poligon">Полигон</RouterLink>
        <RouterLink to="/teorija">Теорија</RouterLink>
      </nav>
    </div>

  <RouterView/>
</template>

<style scoped>
.wrapper {
  text-align: center;
}

.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3498db;
  padding: 10px;
}
.logo {
  position: absolute;
  left: 4rem;
  width: 40px; 
  height: auto;
}
.navbar a {
  color: #ffffff;
  text-decoration: none;
  padding: 8px 20px;
  margin: 0 10px;
  font-size: 18px;
}

.navbar a:hover {
  background-color: #2980b9;
}
</style>
