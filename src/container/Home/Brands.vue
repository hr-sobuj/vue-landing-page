<script setup lang="ts">
import brandImg1 from "./../../assets/images/home/brands/img-1.png";
import brandImg2 from "./../../assets/images/home/brands/img-2.png";
import brandImg3 from "./../../assets/images/home/brands/img-3.png";
import brandImg4 from "./../../assets/images/home/brands/img-4.png";
</script>

<template>
  <section id="brands" class="clear-both mt-[300px]">
    <div class="container">
      <div class="flex space-x-8 justify-center items-center">
        <div>
          <img :src="brandImg1" alt="Brand Image 1" />
        </div>
        <div>
          <img :src="brandImg2" alt="Brand Image 2" />
        </div>
        <div>
          <img :src="brandImg3" alt="Brand Image 3" />
        </div>
        <div>
          <img :src="brandImg4" alt="Brand Image 4" />
        </div>
      </div>
    </div>
  </section>
</template>
