
<template>
    <nav class="navbar-desktop">
      <img src="/logo-long.webp" alt="Logo" class="logo" />
      
      <div class="desktop">
        <NuxtLink to="/">Home</NuxtLink>
        <div class="dropdown">
          <NuxtLink to="/centri">Испитни Центри</NuxtLink>
          <div class="dropdown-content">
            <NuxtLink to="/centri/teorija">Теорија</NuxtLink>
            <NuxtLink to="/centri/poligon">Полигон</NuxtLink>
            <NuxtLink to="/centri/grad">Градска</NuxtLink>
          </div>
        </div>
        <div class="dropdown">
          <NuxtLink to="/gradovi">Градови</NuxtLink>
          <div class="dropdown-content">
            <NuxtLink to="/gradovi/teorija">Теорија</NuxtLink>
            <NuxtLink to="/gradovi/poligon">Полигон</NuxtLink>
            <NuxtLink to="/gradovi/grad">Градска</NuxtLink>
          </div>
        </div>
        <div class="dropdown">
          <NuxtLink to="/skoli">Школи</NuxtLink>
          <div class="dropdown-content">
            <NuxtLink to="/skoli/teorija">Теорија</NuxtLink>
            <NuxtLink to="/skoli/poligon">Полигон</NuxtLink>
            <NuxtLink to="/skoli/grad">Градска</NuxtLink>
          </div>
        </div>
        <NuxtLink to="/about">За нас</NuxtLink>
      </div>
    </nav>
    <nav class="navbar-phone">
      <div class="hamburger" @click="toggleHamburger">&#9776;</div>
      <div v-if="isHamburgerVisible" class="phone-wrapper">
        <NuxtLink @click="toggleHamburger" to="/">Home</NuxtLink>
        <NuxtLink @click="toggleHamburger" to="/centri">Испитни Центри</NuxtLink>
        <NuxtLink @click="toggleHamburger" to="/gradovi">Градови</NuxtLink>
        <NuxtLink @click="toggleHamburger" to="/skoli">Школи</NuxtLink>
        <NuxtLink @click="toggleHamburger" to="/about">За нас</NuxtLink>
      </div>
      <img src="/logo-long.webp" alt="Logo" class="logo-phone">
    </nav>
</template>
<script setup>
import { ref } from 'vue'
const isHamburgerVisible = ref(false)
function toggleHamburger(){
  isHamburgerVisible.value = !isHamburgerVisible.value
}
</script>
<style scoped>
.navbar-desktop {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: rgb(127, 158, 224);
  padding: 10px;
  position: relative;
  z-index: 1000;
}
.navbar-phone{
  display: none;
}
.logo-container {
  margin-right: 10px;
}
.hamburger{
  display: none;
}
.logo {
  height: 2.7rem;
}
.logo-phone {
  display: none;
}

.navbar-desktop a {
  color: #ffffff;
  text-decoration: none;
  padding: 8px 20px;
  font-size: 18px;
}

.navbar a:hover {
  background-color: rgb(117, 148, 216);
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
  background-color: rgb(101, 129, 189);
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
  background-color: rgb(105, 133, 194);
}
.dropdown:hover .dropdown-content {
  display: block;
}

/* cringe low effort hamburger XD */
@media only screen and (max-width: 600px) {
  .logo-phone{
    display: block;
    height: 2.7rem;
    position: absolute;
    left: 10px;
    top: 8px;
  }
  .hamburger{
    display: block;
    position: absolute;
    right: 2rem;
    top: 1rem;
    scale: 2;
    cursor: pointer;
  }
  .navbar-desktop{
    display: none;
  }
  .navbar-phone{
    display: block;
    color: #ffffff;
    background-color: rgb(127, 158, 224);
    padding: 30px;
    position: relative;
  }
  .navbar-phone a {
    text-decoration: none;
    padding: 8px 20px;
    font-size: 18px;
  }
  .phone-wrapper{
    position: absolute;
    display: flex;
    flex-direction: column;
    right: 1rem;
    top: 3rem;
    background-color: rgb(129, 129, 197);
    gap: 0.5rem;
    z-index: 1000;
  }
  .phone-wrapper a{
    color: white;
    font-size: 1.7rem;
  }
  .desktop{
    display: none;
  }
}


</style>