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
      <div class="flex flex-col md:flex-row justify-center items-center">
        <div class="md:basis-[60%] lg:basis-[65%] order-2 md:order-1">
          <div class="flex justify-center items-center relative">
            <img
              :src="performanceImg.src"
              :alt="performanceImg.alt"
              class="z-10"
            />
            <div
              class="w-full h-full bg-gray-200 blur-3xl opacity-40 absolute mx-auto z-[-10]"
            ></div>
          </div>
        </div>
        <div
          class="md:basis-[40%] lg:basis-[35%] order-1 md:order-2 flex flex-col space-y-8"
        >
          <div class="flex flex-col space-y-4">
            <h3 class="title text-4xl">{{ title }}</h3>
            <p class="description text-base">{{ description }}</p>
          </div>
          <table class="border-collapse">
            <tr v-for="(accordion, key) in accordions" :key="key">
              <td class="border-t-2 border-b-2">
                <performance-accordion :accordion="accordion" />
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>
