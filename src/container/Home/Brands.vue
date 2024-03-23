<script setup lang="ts">
import { Navigation, Autoplay } from "swiper/modules";
// @ts-ignore
import { Swiper, SwiperSlide } from "swiper/vue";
import { ImgType } from "../../interfaces/homeInterface";
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
</template>
