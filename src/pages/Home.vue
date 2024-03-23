<script setup>
import homeData from "@/assets/data/Home/home";
import NavBar from "@/components/navbar/NavBar.vue";
import Brands from "@/container/Home/Brands.vue";
import Grow from "@/container/Home/Grow.vue";
import HeroSection from "@/container/Home/HeroSection.vue";
import Security from "@/container/Home/Security.vue";

const {
  navContents,
  heroContents,
  securityContents,
  growContents,
  brandContents,
} = homeData;
</script>

<template name="Home">
  <nav-bar :navContents="navContents" />
  <main>
    <hero-section :heroContents="heroContents" />
    <brands :brandContents="brandContents" />
    <grow :growContents="growContents" />
    <security :securityContents="securityContents" />
  </main>
</template>
