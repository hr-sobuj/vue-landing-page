<script setup lang="ts">
import "swiper/css/effect-coverflow";
// @ts-ignore
import { ImgType } from "@interfaces/homeInterface";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";
// @ts-ignore
import { Swiper, SwiperSlide } from "swiper/vue";
const modules = [Navigation, Autoplay, EffectCoverflow];

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
      <div class="flex flex-col space-y-8">
        <div
          class="text-center flex flex-col justify-center items-center space-y-5"
        >
          <h3 class="title text-5xl">{{ title }}</h3>
          <div class="w-[30%] mx-auto">
            <p class="description text-base">{{ description }}</p>
          </div>
        </div>
        <div>
          <swiper
            :modules="modules"
            :slides-per-view="3"
            :space-between="50"
            :loop="true"
            :autoplay="{ delay: 3000 }"
            :breakpoints="{
              '0': {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              '768': {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              '1024': {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }"
          >
            <swiper-slide
              v-for="card of cards"
              :key="card.name"
              class="shadow border inline-flex flex-col justify-center items-center py-14 px-7 space-y-5"
            >
              <div>
                <img
                  :src="card.img.src"
                  :alt="card.img.alt"
                  class="w-24 h-24"
                />
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
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.swiper-3d .swiper-slide-shadow-left {
  background-image: linear-gradient(
    to left,
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.1)
  );
}
.swiper-3d .swiper-slide-shadow-right {
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0)
  );
}

.swiper-3d .swiper-slide-shadow-right {
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, -1.5),
    rgba(0, 0, 0, 0)
  ) !important;
}

/* <!-- effect="coverflow"
            :coverflowEffect="{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }" */
</style>
