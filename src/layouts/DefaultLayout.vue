<script setup>
import footerData from "@/assets/data/footer/footer";
import headerData from "@/assets/data/header/header";
import FooterSection from "@/components/footer/FooterSection.vue";
import NavBar from "@/components/navbar/NavBar.vue";

const { content: navContents } = headerData;
const { content: footerContents } = footerData;
</script>

<template name="default-layout">
  <nav-bar :navContents="navContents" />
  <main>
    <slot></slot>
  </main>
  <footer-section :footerContents="footerContents" />
</template>
