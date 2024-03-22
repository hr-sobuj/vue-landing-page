<script setup lang="ts">
import { navContent } from "./../../assets/data/Home/home";
import Logo from "./../../assets/images/logo.png";
</script>

<template>
  <nav>
    <div class="container flex justify-between items-center space-x-10">
      <div>
        <img :src="Logo" alt="logo" role="img" />
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
          <button
            class="bg-primary hover:bg-[#1E0FC2] transition duration-300 text-white px-6 py-3 rounded-lg"
          >
            {{ navContent.btnTxt }}
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>
