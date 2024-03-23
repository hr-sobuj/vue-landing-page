<script setup lang="ts">
import { ImgType } from "../../interfaces/homeInterface";

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
        <div class="text-center">
          <h3>{{ title }}</h3>
          <p>{{ description }}</p>
        </div>
        <div class="flex space-x-8">
          <div
            v-for="card of cards"
            :key="card.name"
            class="shadow-lg bg-white"
          >
            <div>
              <img :src="card.img.src" :alt="card.img.alt" />
            </div>
            <div>
              <p>
                {{ card.speech }}
              </p>
              <div>
                <p>
                  {{ card.name }}
                </p>
                <p>
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
