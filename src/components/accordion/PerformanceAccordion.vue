<script setup lang="ts">
import { defineProps, ref } from "vue";

interface AccordionType {
  title: string;
  description: string;
}

const props = defineProps<{
  accordion: AccordionType;
}>();

const open = ref(false);

const {
  // @ts-ignore
  accordion: { title, description },
} = props;
</script>

<template>
  <div class="font-inter py-2 md:py-0 lg:py-4">
    <div class="flex flex-col justify-center overflow-hidden">
      <div class="py-2">
        <h2>
          <button
            class="flex items-center justify-between w-full text-left font-semibold py-2"
            @click="open = !open"
          >
            <span>{{ accordion.title }}</span>
            <svg
              class="fill-black shrink-0 ml-8"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="7"
                width="16"
                height="2"
                rx="1"
                class="transform origin-center transition duration-200 ease-out"
                :class="{ '!rotate-180': open }"
              />
              <rect
                y="7"
                width="16"
                height="2"
                rx="1"
                class="transform origin-center rotate-90 transition duration-200 ease-out"
                :class="{ '!rotate-180': open }"
              />
            </svg>
          </button>
        </h2>
        <div
          class="grid text-sm text-slate-600 overflow-hidden transition-all duration-300 ease-in-out"
          :class="
            open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          "
        >
          <div class="overflow-hidden">
            <p class="pb-3">{{ accordion.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
