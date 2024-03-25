<script setup lang="ts">
import { ImgType } from "@interfaces/homeInterface";
import { ref } from "vue";

interface NavLink {
  url: string;
  name: string;
}

interface NavContents {
  logo: ImgType;
  links: NavLink[];
  btnTxt: string;
}

const props = defineProps<{
  navContents: NavContents;
}>();
const {
  //@ts-ignore
  navContents: { logo, links, btnTxt },
} = props;

let open = ref(false);
</script>

<template name="NavBar">
  <header>
    <nav>
      <div class="container flex justify-between items-center space-x-10">
        <div>
          <h1>
            <a href="/">
              <img :src="logo.src" :alt="logo.alt" role="img" />
            </a>
          </h1>
        </div>
        <div class="hidden lg:flex justify-between items-center space-x-16">
          <div class="flex space-x-11">
            <div v-for="link of links" :key="link.name" class="flex space-x-4">
              <a :href="link.url">{{ link.name }}</a>
            </div>
          </div>
          <div>
            <button class="btn-primary">
              {{ btnTxt }}
            </button>
          </div>
        </div>
        <div class="block lg:hidden">
          <button @click="open = !open" :class="{ open: open }">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-8 h-8 transform transition-all"
            >
              <template v-if="open">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </template>
              <template v-else>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </template>
            </svg>
          </button>
        </div>
      </div>
      <div
        class="grid text-sm text-slate-600 overflow-hidden transition-all duration-300 ease-in-out"
        :class="
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        "
      >
        <ul
          class="overflow-hidden lg:hidden flex flex-col space-y-4 bg-slate-100 transition-all duration-200"
          :class="{ ' p-5': open }"
        >
          <li v-for="link of links" :key="link.name" class="flex space-x-4">
            <a :href="link.url" class="text-lg text-black">{{ link.name }}</a>
          </li>
          <div>
            <button class="btn-primary">
              {{ btnTxt }}
            </button>
          </div>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.open svg {
  transform: rotate(90deg);
}
</style>
