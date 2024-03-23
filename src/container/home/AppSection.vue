<script setup lang="ts">
import { ImgType } from "../../interfaces/homeInterface";

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
      <div class="flex justify-center items-center">
        <div class="basis-1/2">
          <div>
            <h3 class="title">{{ title }}</h3>
            <p class="description">
              {{ description }}
            </p>
          </div>
          <div>
            <div>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter your email address"
                class="border px-4 py-2"
              />
              <button class="btn-primary">Try Free</button>
            </div>
            <p>Already a member? <a href="#">Sign In</a></p>
          </div>
        </div>
        <div class="basis-1/2">
          <img :src="appImg.src" :alt="appImg.alt" />
        </div>
      </div>
    </div>
  </section>
</template>
