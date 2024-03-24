<script async setup lang="ts">
import { ImgType } from "@interfaces/homeInterface";
// @ts-ignore
import PerformanceAccordion from "@components/accordion/PerformanceAccordion.vue";

interface ItemType {
  title: string;
  description: string;
}

interface PerformanceContents {
  title: string;
  description: string;
  accordions: ItemType[];
  performanceImg: ImgType;
}

const props = defineProps<{
  performanceContents: PerformanceContents;
}>();

const {
  // @ts-ignore
  performanceContents: { title, description, accordions, performanceImg },
} = props;
</script>

<template name="Performance">
  <section id="performance">
    <div class="container">
      <div class="flex justify-center items-center">
        <div class="basis-[65%]">
          <div>
            <img :src="performanceImg.src" :alt="performanceImg.alt" />
          </div>
        </div>
        <div class="basis-[35%]">
          <div>
            <h3 class="title text-4xl">{{ title }}</h3>
            <p class="description text-base">{{ description }}</p>
          </div>
          <div>
            <div v-for="(accordion, key) in accordions" :key="key">
              <performance-accordion :accordion="accordion" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
