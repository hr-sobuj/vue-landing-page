<script setup lang="ts">
import { ImgType } from "@interfaces/homeInterface";

interface HeroContents {
  heroImg1: ImgType;
  heroImg2: ImgType;
  heroImg3: ImgType;
  heroGroupImg: ImgType;
  title: string;
  description: string;
  btn1: string;
  btn2: string;
  points: string[];
}

const props = defineProps<{
  heroContents: HeroContents;
}>();

const {
  // @ts-ignore
  heroContents: { title, description, btn1, btn2, heroGroupImg, points },
} = props;
</script>

<template>
  <section id="hero">
    <div
      class="container flex flex-col md:flex-row justify-center items-center min-h-full"
    >
      <div class="basis-full md:basis-1/2 order-1">
        <div class="flex flex-col justify-center space-y-10">
          <div class="flex flex-col">
            <div class="flex justify-around">
              <div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="10"
                    cy="10"
                    r="10"
                    fill="#D4767F"
                    fill-opacity="0.3"
                  />
                </svg>
              </div>
              <div>
                <svg
                  width="48"
                  height="63"
                  viewBox="0 0 48 63"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.50764e-06 -3.8147e-06L0 63L48 31.4956L5.50764e-06 -3.8147e-06Z"
                    fill="#38DA71"
                    fill-opacity="0.3"
                  />
                </svg>
              </div>
            </div>
            <div class="inline-flex flex-col space-y-5">
              <h3 class="title text-4xl md:text-5xl lg:text-7xl">
                {{ title }}
              </h3>
              <p class="description text-lg">
                {{ description }}
              </p>
            </div>
          </div>
          <div class="flex flex-col space-y-4">
            <div class="flex justify-start items-center space-x-6">
              <button class="btn-primary px-5 md:px-10">{{ btn1 }}</button>
              <button class="inline-flex space-x-1 font-semibold group">
                <span>
                  {{ btn2 }}
                </span>
                <span class="group-hover:translate-x-1 transition-transform">
                  <svg
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
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
            <ul
              class="flex flex-col md:flex-row space-x-0 space-y-4 md:space-y-0 md:space-x-10"
            >
              <li
                v-for="(point, key) of points"
                :key="key"
                class="inline-flex space-x-2"
              >
                <span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071L3.29289 10.7071C2.90237 10.3166 2.90237 9.68342 3.29289 9.29289C3.68342 8.90237 4.31658 8.90237 4.70711 9.29289L8 12.5858L15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289Z"
                      fill="#3921F5"
                    />
                  </svg>
                </span>
                <span>{{ point }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="block md:basis-1/2 w-full order-2">
        <div class="flex justify-center relative">
          <img :src="heroGroupImg.src" :alt="heroGroupImg.alt" />
          <div
            class="bg-[#15BEE3] w-[50%] h-[50%] absolute mx-auto opacity-[.07] top-20 blur-3xl z-[-200]"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>
