<script setup lang="ts">
interface Card {
  icon: string;
  title: string;
  description: string;
}

interface GrowContents {
  title: string;
  description: string;
  cards: Card[];
}

const props = defineProps<{
  growContents: GrowContents;
}>();

const {
  // @ts-ignore
  growContents: { title, description, cards },
} = props;
</script>

<template name="Grow">
  <section id="grow">
    <div class="container">
      <div class="flex flex-col justify-center items-center space-y-12">
        <div class="text-center inline-flex space-y-4 flex-col">
          <h3 class="title text-4xl">
            {{ title }}
          </h3>
          <div class="inline-flex justify-center items-center">
            <p class="description text-base">
              {{ description }}
            </p>
          </div>
        </div>
        <div class="flex space-x-6">
          <div
            v-for="card of cards"
            :key="card.title"
            class="flex flex-col justify-center items-center text-center bg-white py-24 px-7 space-y-5 custom-shadow"
          >
            <img
              :src="card.icon"
              :alt="card.title"
              class="w-[4.4rem] h-[4.4rem]"
            />
            <h5 class="title text-[1.33rem]">
              {{ card.title }}
            </h5>
            <p class="description text-lg">{{ card.description }}</p>
          </div>
        </div>
      </div>
      <div class="text-center mt-20 text-xl">
        <span class="text-secondary2">
          Approx <span class="text-primary font-bold"> 875+ </span> team members
          ready to online support for you
        </span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.custom-shadow {
  box-shadow: 0 0px 36px rgba(0, 0, 0, -0.2), 0 0px 36px rgba(0, 0, 0, 0.12);
}
</style>
