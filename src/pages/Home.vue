<script setup name="Home">
import NavBar from "../components/navbar/NavBar.vue";
import Brands from "../container/Home/Brands.vue";
import Grow from "../container/Home/Grow.vue";
import HeroSection from "../container/Home/HeroSection.vue";
</script>

<template>
  <nav-bar />
  <main>
    <hero-section />
    <brands />
    <grow />
  </main>
</template>
