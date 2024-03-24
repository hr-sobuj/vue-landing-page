<script setup lang="ts">
// @ts-ignore
import { ImgType } from "@interfaces/homeInterface";

interface SayCard {
  img: ImgType;
  speech: string;
  name: string;
  designation: string;
}

interface SayContent {
  title: string;
  description: string;
  cards: SayCard[];
}

const props = defineProps<{
  sayContents: SayContent;
}>();

const {
  // @ts-ignore
  sayContents: { title, description, cards },
} = props;
</script>

<template name="Say">
  <section id="say">
    <div class="container">
      <div>
        <div
          class="text-center flex flex-col justify-center items-center space-y-5"
        >
          <h3 class="title text-5xl">{{ title }}</h3>
          <p class="description text-base">{{ description }}</p>
        </div>
        <div class="grid grid-cols-3 justify-center items-center space-x-8">
          <div
            v-for="card of cards"
            :key="card.name"
            class="shadow-lg bg-white inline-flex flex-col justify-center items-center py-14 px-7 space-y-5"
          >
            <div>
              <img :src="card.img.src" :alt="card.img.alt" class="w-24 h-24" />
            </div>
            <div
              class="inline-flex flex-col space-y-10 text-center items-center justify-center"
            >
              <p>
                {{ card.speech }}
              </p>
              <div>
                <p class="font-bold title">
                  {{ card.name }}
                </p>
                <p class="description">
                  {{ card.designation }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
