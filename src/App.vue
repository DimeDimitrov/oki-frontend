<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
    <div class="wrapper">

      <nav class="navbar">
        <img src="/logo.png" alt="Logo" class="logo" />

        <RouterLink to="/">Home</RouterLink>
        <div class="dropdown">
          <RouterLink to="/grad">Испитни Центри</RouterLink>
          <div class="dropdown-content">
            <RouterLink to="/grad">Градска</RouterLink>
            <RouterLink to="/poligon">Полигон</RouterLink>
            <RouterLink to="/teorija">Теорија</RouterLink>
          </div>
        </div>
        <div class="dropdown">
          <RouterLink to="/gradovi/grad">Градови</RouterLink>
          <div class="dropdown-content">
            <RouterLink to="/gradovi/grad">Градска</RouterLink>
            <RouterLink to="/gradovi/poligon">Полигон</RouterLink>
            <RouterLink to="/gradovi/teorija">Теорија</RouterLink>
          </div>
        </div>
        <div class="dropdown">
          <RouterLink to="/skoli/grad">Школи</RouterLink>
          <div class="dropdown-content">
            <RouterLink to="/skoli/grad">Градска</RouterLink>
            <RouterLink to="/skoli/poligon">Полигон</RouterLink>
            <RouterLink to="/skoli/teorija">Теорија</RouterLink>
          </div>
        </div>
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

/* Dropdown styles */
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #3498db;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: #ffffff;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #2980b9;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>