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
        <div class="hidden md:flex justify-between items-center space-x-16">
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
        <div class="block md:hidden">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>
