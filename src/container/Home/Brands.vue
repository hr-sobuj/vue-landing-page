<!-- <script setup lang="ts">
import brandImg1 from "./../../assets/images/home/brands/img-1.png";
import brandImg2 from "./../../assets/images/home/brands/img-2.png";
import brandImg3 from "./../../assets/images/home/brands/img-3.png";
import brandImg4 from "./../../assets/images/home/brands/img-4.png";

import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";

const modules = [Navigation, Autoplay];
const sliderItems = [
  { src: brandImg1, alt: "Brand Image 1" },
  { src: brandImg2, alt: "Brand Image 2" },
  { src: brandImg3, alt: "Brand Image 3" },
  { src: brandImg4, alt: "Brand Image 4" },
  { src: brandImg3, alt: "Brand Image 3" },
];
</script>

<template name="Brands">
  <section id="brands" class="clear-both mt-[300px]">
    <div class="container">
      <swiper
        :modules="modules"
        :slides-per-view="4"
        :space-between="50"
        :loop="true"
        :autoplay="{ delay: 2000 }"
        class="flex justify-center items-center"
      >
        <swiper-slide v-for="sliderItem of sliderItems" :key="sliderItem.src">
          <img :src="sliderItem.src" :alt="sliderItem.alt" />
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template> -->
