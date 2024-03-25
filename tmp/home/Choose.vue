<script setup lang="ts">
import { ImgType } from "@interfaces/homeInterface";

interface Card {
  icon: string;
  title: string;
  description: string;
}

interface ChooseContents {
  title: string;
  description: string;
  chooseImg: ImgType;
  cards: Card[];
}

const props = defineProps<{
  chooseContents: ChooseContents;
}>();
const {
  // @ts-ignore
  chooseContents: { title, description, chooseImg, cards },
} = props;
</script>

<template name="Choose">
  <section id="choose">
    <div class="container">
      <div class="flex flex-col justify-center items-center space-y-12">
        <div class="text-center inline-flex space-y-4 flex-col">
          <div class="w-full md:w-[55%] mx-auto">
            <h3 class="title text-3xl md:text-4xl">
              {{ title }}
            </h3>
          </div>
          <div class="w-full md:w-[55%] mx-auto">
            <p class="description text-base">
              {{ description }}
            </p>
          </div>
        </div>
        <div>
          <img :src="chooseImg.src" :alt="chooseImg.alt" />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="card of cards"
            :key="card.title"
            class="flex flex-col justify-center items-center text-center bg-white py-14 px-7 space-y-5 custom-shadow"
          >
            <img
              :src="card.icon"
              :alt="card.title"
              class="w-[4.4rem] h-[4.4rem]"
            />
            <h5 class="title text-[1.33rem]">
              {{ card.title }}
            </h5>
            <p class="description text-lg">{{ card.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.custom-shadow {
  box-shadow: 0 0px 36px rgba(0, 0, 0, -0.2), 0 0px 36px rgba(0, 0, 0, 0.12);
}
</style>
