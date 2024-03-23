<script setup lang="ts">
import { ImgType } from "../../interfaces/homeInterface";

interface ItemType {
  title: string;
  description: string;
}

interface PerformanceContents {
  title: string;
  description: string;
  accordion: ItemType[];
  performanceImg: ImgType;
  performanceShape: ImgType;
}

const props = defineProps<{
  performanceContents: PerformanceContents;
}>();

const {
  // @ts-ignore
  performanceContents: {
    title,
    description,
    accordion,
    performanceImg,
    performanceShape,
  },
} = props;
</script>

<template name="Performance">
  <section id="performance">
    <div class="container">
      <div class="flex justify-center items-center">
        <div class="basis-1/2">
          <div>
            <img :src="performanceImg.src" :alt="performanceImg.alt" />
          </div>
          <img :src="performanceShape.src" :alt="performanceShape.alt" />
        </div>
        <div class="basis-1/2">
          <div>
            <h3>{{ title }}</h3>
            <p>{{ description }}</p>
          </div>
          <div>
            <!-- accordian  -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
