<script setup>
import { growContent } from "./../../assets/data/Home/home";
</script>

<template>
  <section id="grow">
    <div class="container">
      <div class="flex flex-col justify-center items-center">
        <div class="text-center">
          <h3 class="text-4xl">
            {{ growContent.title }}
          </h3>
          <p class="text-textGray">
            {{ growContent.description }}
          </p>
        </div>
        <div>
          <div v-for="card of growContent.card" :key="card.title">
            <span>{{ card.icon }}</span>
            <span>{{ card.title }}</span>
            <span>{{ card.description }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
