<script setup lang="ts">
import { Autoplay, Navigation } from "swiper/modules";
// @ts-ignore
import { ImgType } from "@interfaces/homeInterface";
import { Swiper, SwiperSlide } from "swiper/vue";
const modules = [Navigation, Autoplay];

interface BrandContents {
  sliderItems: ImgType[];
}

const props = defineProps<{
  brandContents: BrandContents;
}>();

const {
  brandContents: { sliderItems },
} = props;
</script>

<template name="Brands">
  <section id="brands">
    <div class="container">
      <swiper
        :modules="modules"
        :slides-per-view="4"
        :space-between="50"
        :loop="true"
        :autoplay="{ delay: 2000 }"
        class="flex justify-center items-center"
        :breakpoints="{
          '0': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '768': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '1024': {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }"
      >
        <swiper-slide v-for="sliderItem of sliderItems" :key="sliderItem.src">
          <img :src="sliderItem.src" :alt="sliderItem.alt" />
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>
