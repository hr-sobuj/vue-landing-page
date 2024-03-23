<script setup>
import homeData from "@/assets/data/home/home";
import Brands from "@/container/Home/Brands.vue";
import Grow from "@/container/Home/Grow.vue";
import HeroSection from "@/container/Home/HeroSection.vue";
import Security from "@/container/Home/Security.vue";

const { heroContents, securityContents, growContents, brandContents } =
  homeData;
</script>

<template name="Home">
  <hero-section :heroContents="heroContents" />
  <brands :brandContents="brandContents" />
  <grow :growContents="growContents" />
  <security :securityContents="securityContents" />
</template>
