<script setup lang="ts">
import { heroSection } from "./../../assets/data/Home/home";
import heroImg1 from "./../../assets/images/home/hero/hero-img-1.png";
import heroImg2 from "./../../assets/images/home/hero/hero-img-2.png";
import heroImg3 from "./../../assets/images/home/hero/hero-img-3.png";
</script>

<template>
  <section id="hero">
    <div
      class="container flex flex-col md:flex-row justify-center items-center min-h-[300px]"
    >
      <div class="basis-full md:basis-1/2 order-1 static md:relative">
        <div
          class="flex flex-col justify-center space-y-10 md:absolute md:inset-y-auto"
        >
          <div class="inline-flex flex-col space-y-5">
            <h3 class="text-5xl font-bold">
              {{ heroSection.title }}
            </h3>
            <p class="text-[#4F4F4F]">
              {{ heroSection.description }}
            </p>
          </div>
          <div class="flex justify-start items-center space-x-6">
            <button class="btn-primary px-10">{{ heroSection.btn1 }}</button>
            <button class="inline-flex space-x-1 font-semibold group">
              <span>
                {{ heroSection.btn2 }}
              </span>
              <span class="group-hover:translate-x-1 transition-transform"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </span>
            </button>
          </div>
          <div>
            <span></span>
          </div>
        </div>
      </div>
      <div class="basis-full md:basis-1/2 w-full order-2">
        <div class="group">
          <div class="relative group">
            <div class="inline-flex justify-start items-start z-[200]">
              <img :src="heroImg1" alt="" class="relative" />
              <img
                :src="heroImg2"
                alt=""
                class="absolute left-[265px] top-[44px]"
              />
            </div>

            <div class="absolute left-[30%] top-[45%] rounded-full z-[-200]">
              <div class="bg-[#15BEE3] p-28 opacity-[0.07] blur-md"></div>
            </div>
            <img
              :src="heroImg3"
              alt=""
              class="absolute bottom-[-330px] right-[42px] z-[-10]"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
