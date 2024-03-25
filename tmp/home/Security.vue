<script setup lang="ts">
import { ImgType } from "@interfaces/homeInterface";

interface ExtraContent {
  title: string;
  description: string;
}

interface SecurityContents {
  title: string;
  description: string;
  extras: ExtraContent[];
  securityImg: ImgType;
  securityShape: ImgType;
}

const props = defineProps<{
  securityContents: SecurityContents;
}>();

const {
  // @ts-ignore
  securityContents: { title, description, securityImg, extras, securityShape },
} = props;
</script>

<template name="Security">
  <section id="security">
    <div class="container">
      <div
        class="flex flex-col md:flex-row justify-between items-center space-x-10"
      >
        <div class="md:basis-1/2 flex flex-col space-y-10 relative">
          <div class="inline-flex flex-col space-y-6">
            <h3 class="title text-4xl">{{ title }}</h3>
            <p class="description text-base">
              {{ description }}
            </p>
          </div>
          <hr />
          <div class="flex flex-col space-y-6">
            <div v-for="extra of extras" :key="extra.title">
              <h3 class="title text-[1.33rem]">{{ extra.title }}</h3>
              <p class="description text-lg">
                {{ extra.description }}
              </p>
            </div>
          </div>
          <div>
            <img
              :src="securityShape.src"
              :alt="securityShape.alt"
              class="hidden md:absolute top-[24px] right-[-79px]"
            />
          </div>
        </div>
        <div class="md:basis-1/2 flex justify-end">
          <img :src="securityImg.src" :alt="securityImg.alt" />
        </div>
      </div>
    </div>
  </section>
</template>
