<script setup lang="ts">
// @ts-ignore
import { ImgType } from "@interfaces/homeInterface";

interface AppContent {
  title: string;
  description: string;
  appImg: ImgType;
}

const props = defineProps<{
  appContents: AppContent;
}>();

const {
  // @ts-ignore
  appContents: { title, description, appImg },
} = props;
</script>

<template name="App">
  <section id="app">
    <div class="container">
      <div class="flex flex-col md:flex-row justify-center items-center">
        <div class="md:basis-[45%] flex flex-col space-y-8">
          <div class="inline-flex flex-col space-y-6">
            <h3 class="title text-4xl">{{ title }}</h3>
            <p class="description text-base">
              {{ description }}
            </p>
          </div>
          <div class="flex flex-col w-full space-y-6">
            <div class="flex space-x-5 w-full">
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter your email address"
                class="rounded-lg shadow-lg px-6 py-3"
              />
              <button class="btn-primary font-bold">Try Free</button>
            </div>
            <p class="text-textGray">
              Already a member? <a href="#" class="font-semibold">Sign In</a>
            </p>
          </div>
        </div>
        <div class="md:basis-[55%]">
          <div class="flex justify-end items-end w-full">
            <img
              :src="appImg.src"
              :alt="appImg.alt"
              class="inline-flex justify-self-end max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
