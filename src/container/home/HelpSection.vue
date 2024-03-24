<script setup lang="ts">
// @ts-ignore
import { CounterItemTypes } from "@interfaces/homeInterface";
import { onMounted, onUnmounted, ref } from "vue";

interface HelpContents {
  title: string;
  description: string;
  items: CounterItemTypes[];
}

const props = defineProps<{
  helpContents: HelpContents;
}>();

const {
  // @ts-ignore
  helpContents: { title, description, items },
} = props;

let counters = ref<number[]>(Array(4).fill(0));
let isCounting = false;
let timerId: ReturnType<typeof setTimeout> | null;

onMounted(() => {
  window.addEventListener("scroll", handleScrolling);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScrolling);
  if (timerId) clearTimeout(timerId);
});

const handleScrolling = () => {
  let helpSection = document.getElementById("help");
  if (helpSection) {
    let { top, bottom } = helpSection.getBoundingClientRect();
    if (top < window.innerHeight && bottom > 0 && !isCounting) {
      startCounterUp();
      isCounting = true;
    }
  }
};

const startCounterUp = () => {
  const maxNumber = Math.max(...items.map((item) => item.number));
  const duration = 3000;
  const increment = () => {
    items.forEach((item, idx) => {
      const targetNumber = item.number;
      if (counters.value[idx] < targetNumber) {
        counters.value[idx] = Math.min(++counters.value[idx], targetNumber);
      }
    });

    if (
      counters.value.some(
        (value: number, idx: number) => value < items[idx].number
      )
    ) {
      timerId = setTimeout(increment, duration / maxNumber);
    }
  };
  increment();
};
</script>

<template name="HelpSection">
  <section id="help" class="bg-primary text-white py-16">
    <div class="container">
      <div class="flex flex-col justify-center items-center space-y-20">
        <div class="text-center inline-flex flex-col space-y-8">
          <h3 class="title text-4xl text-white">{{ title }}</h3>
          <div class="w-full md:w-3/5 mx-auto">
            <p class="description text-base text-gray-300">{{ description }}</p>
          </div>
        </div>
        <div
          class="grid grid-cols-1 md:grid-cols-4 gap-y-14 md:gap-y-0 justify-between items-center w-full"
        >
          <div
            v-for="(item, idx) of items"
            :key="item.number"
            class="inline-flex flex-col space-y-3 justify-center items-center"
          >
            <h3 class="font-bold text-5xl text-white">
              <span>
                {{ counters[idx] }}
              </span>
              <span class="ml-1">
                {{ item.postfix }}
              </span>
            </h3>
            <p class="text-lg text-white">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
