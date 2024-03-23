<script setup>
import homeData from "@/assets/data/home/home";
import AppSection from "@/container/home/AppSection.vue";
import Brands from "@/container/home/Brands.vue";
import Choose from "@/container/home/Choose.vue";
import ExtraImg from "@/container/home/ExtraImg.vue";
import Grow from "@/container/home/Grow.vue";
import HelpSection from "@/container/home/HelpSection.vue";
import HeroSection from "@/container/home/HeroSection.vue";
import Performance from "@/container/home/Performance.vue";
import Say from "@/container/home/Say.vue";
import Security from "@/container/home/Security.vue";

const {
  heroContents,
  securityContents,
  growContents,
  brandContents,
  sayContents,
  appContents,
  helpContents,
  chooseContents,
  performanceContents,
} = homeData;
</script>

<template name="Home">
  <hero-section :heroContents="heroContents" />
  <brands :brandContents="brandContents" />
  <grow :growContents="growContents" />
  <security :securityContents="securityContents" />
  <performance :performanceContents="performanceContents" />
  <choose :chooseContents="chooseContents" />
  <app-section :appContents="appContents" />
  <help-section :helpContents="helpContents" />
  <extra-img />
  <say :sayContents="sayContents" />
</template>
