
import type { NuxtLink } from '#build/components';
<template>
    <nav class="navbar">
        <!-- <img src="/logo.png" alt="Logo" class="logo" /> -->

        <NuxtLink to="/">Home</NuxtLink>
        <div class="dropdown">
          <NuxtLink to="/centri/grad">Испитни Центри</NuxtLink>
          <div class="dropdown-content">
            <NuxtLink to="/centri/teorija">Теорија</NuxtLink>
            <NuxtLink to="/centri/poligon">Полигон</NuxtLink>
            <NuxtLink to="/centri/grad">Градска</NuxtLink>
          </div>
        </div>
        <div class="dropdown">
          <NuxtLink to="/gradovi/grad">Градови</NuxtLink>
          <div class="dropdown-content">
            <NuxtLink to="/gradovi/teorija">Теорија</NuxtLink>
            <NuxtLink to="/gradovi/poligon">Полигон</NuxtLink>
            <NuxtLink to="/gradovi/grad">Градска</NuxtLink>
          </div>
        </div>
        <div class="dropdown">
          <NuxtLink to="/skoli/grad">Школи</NuxtLink>
          <div class="dropdown-content">
            <NuxtLink to="/skoli/teorija">Теорија</NuxtLink>
            <NuxtLink to="/skoli/poligon">Полигон</NuxtLink>
            <NuxtLink to="/skoli/grad">Градска</NuxtLink>
          </div>
        </div>
      </nav>
</template>
<style scoped>
.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3498db;
  padding: 10px;
  position: relative;
  z-index: 1000;
}

.logo-container {
  margin-right: 10px;
}

.logo {
  width: 40px;
  height: auto;
  position: absolute;
  left: 4rem;
}

.navbar a {
  color: #ffffff;
  text-decoration: none;
  padding: 8px 20px;
  font-size: 18px;
}

.navbar a:hover {
  background-color: #2980b9;
}

/* Dropdown styles */
.dropdown {
  position: relative;
  display: inline-block;
  margin-right: 10px;
}

.dropdown-content {
  width: 100%;
  display: none;
  position: absolute;
  background-color: #3ba8f0;
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
  background-color: #3090cf;
}
.dropdown:hover .dropdown-content {
  display: block;
}
</style>