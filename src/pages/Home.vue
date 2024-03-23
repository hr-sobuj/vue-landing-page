<script setup>
// import NavBar from "../components/navbar/NavBar.vue";
// import Brands from "../container/Home/Brands.vue";
// import Grow from "../container/Home/Grow.vue";
// import Security from "../container/Home/Security.vue";
import homeData from "@/assets/data/Home/home";
import HeroSection from "@/container/Home/HeroSection.vue";

const { heroContent, securityContent } = homeData;
</script>

<template name="Home">
  <!-- <nav-bar /> -->
  <main>
    <hero-section :heroContent="heroContent" />
    <!-- <brands />
    <grow />
    <security :securityContent="securityContent" /> -->
  </main>
</template>
