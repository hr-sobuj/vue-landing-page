<script setup>
import headerData from "@/assets/data/header/header";
import FooterSection from "@/components/footer/FooterSection.vue";
import NavBar from "@/components/navbar/NavBar.vue";

const { content: navContent } = headerData;
const { content: footerContent } = headerData;
</script>

<template name="default-layout">
  <nav-bar :navContents="navContent" />
  <main>
    <slot></slot>
  </main>
  <footer-section :footerContent="footerContent" />
</template>
