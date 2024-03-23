<script setup lang="ts">
interface Card {
  icon: string;
  title: string;
  description: string;
}

interface GrowContents {
  title: string;
  description: string;
  card: Card[];
}

const props = defineProps<{
  growContents: GrowContents;
}>();
const { growContents } = props;
</script>

<template name="Grow">
  <section id="grow">
    <div class="container">
      <div class="flex flex-col justify-center items-center space-y-12">
        <div class="text-center inline-flex space-y-4 flex-col">
          <h3 class="text-4xl text-secondary2 font-semibold">
            {{ growContents.title }}
          </h3>
          <div class="inline-flex justify-center items-center">
            <p class="text-textGray text-base">
              {{ growContents.description }}
            </p>
          </div>
        </div>
        <div class="flex space-x-6">
          <div
            v-for="card of growContents.card"
            :key="card.title"
            class="flex flex-col justify-center items-center text-center bg-white py-14 px-7 space-y-4 custom-shadow"
          >
            <img :src="card.icon" :alt="card.title" class="w-[70px] h-[70px]" />
            <h5 class="text-secondary2 text-xl font-semibold">
              {{ card.title }}
            </h5>
            <p class="text-textGray text-lg">{{ card.description }}</p>
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
