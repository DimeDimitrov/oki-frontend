<template>
  <div id="app">
    <Navbar />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <Footer />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Статистики за возачки испити',
  meta: [
    { name: 'keywords', content: 'возачки испити, испитен центар, статистики, statistiki, Македонија, ispiten centar, vozacki ispiti, rezultati, vozacki testovi, vozacki ispit, rezultati, pass rate' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: "google-site-verification", content: "n0uyPcWfyO-8mPWUH9YVrUttHKcx54l1kYi_VZjfHLc"}
  ],
})
useSeoMeta({
  title: 'Статистики за возачки испити во Македонија',
  description: 'Откриј трендови во разни испитни центри и на кој обид минат луѓето во градовите. Одберете ги најдобрите возачки училишта според вистински резултати.',
  ogTitle: 'Статистики за возачки испити во Македонија',
  ogDescription: 'Откриј трендови во разни испитни центри и на кој обид минат луѓето во градовите. Одберете ги најдобрите возачки училишта според вистински резултати.',
  ogUrl: "https://vozackiispiti.com",
  ogLocale: "mk_MK",
  ogSiteName: "Статистики за возачки испити",
  ogImage: "/banner.webp",
  twitterCard: 'summary_large_image',
})
</script>
<style>
#app{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
body{
  min-height: 100vh;
  margin: 0;
  padding: 0;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
</style>
<style>
h1{
  color: #007bff;
}
</style>