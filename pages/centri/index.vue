<template>
    <div class="head">
        <h1>Испитни Центри</h1>
        <h2>Одбери тип на испит</h2>
    </div>
    
    <div class="container">
        <NuxtLink id="teorija" class="card" to="/centri/teorija">Теорија</NuxtLink>
        <NuxtLink id="poligon" class="card" to="/centri/poligon">Полигон</NuxtLink>
        <NuxtLink id="grad" class="card" to="/centri/grad">Град</NuxtLink>
    </div>
</template>
  
<style scoped>
.container{
    display: flex;
    padding: 2rem;
    gap: 1rem;
}
.card {
    font-size: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-decoration: none;
    width: 90%;
    height: 30rem;
    cursor: pointer;
    transition: all 0.3s ease;
    border-radius: 2rem;
}
.card:hover{
    transform: scale(1.05)
}
.head{
    text-align: center;
}
#teorija{
  background-image: url('/teorija.webp');
  color: rgb(33, 97, 235);
  background-size: cover;
}
#poligon{
  background-image: url('/poligon.webp');
  color: rgb(33, 97, 235);
  background-size: cover;
}
#grad{
  background-image: url('/grad.webp');
  color: rgb(33, 97, 235);
  background-size: cover;
}

@media screen and (max-width: 768px) {
  .container {
    flex-wrap: wrap;
  }

  .card {
    width: 100%; /* Take up full width on smaller screens */
    height: 10rem;
  }
}
</style>
  