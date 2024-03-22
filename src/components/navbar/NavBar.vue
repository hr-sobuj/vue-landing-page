<script setup lang="ts">
import { navContent } from "./../../assets/data/Home/home";
import Logo from "./../../assets/images/logo.png";
</script>

<template>
  <header>
    <nav>
      <div class="container flex justify-between items-center space-x-10">
        <div>
          <h1>
            <a href="/">
              <img :src="Logo" alt="logo" role="img" />
            </a>
          </h1>
        </div>
        <div class="flex justify-between items-center space-x-16">
          <div class="flex space-x-11">
            <div
              v-for="link of navContent.links"
              :key="link.name"
              class="flex space-x-4"
            >
              <a :href="link.url">{{ link.name }}</a>
            </div>
          </div>
          <div>
            <button class="btn-primary">
              {{ navContent.btnTxt }}
            </button>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
