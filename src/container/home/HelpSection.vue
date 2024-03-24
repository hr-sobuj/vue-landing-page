<script setup lang="ts">
interface ItemTypes {
  number: string;
  description: string;
}

interface HelpContents {
  title: string;
  description: string;
  items: ItemTypes[];
}

const props = defineProps<{
  helpContents: HelpContents;
}>();

const {
  // @ts-ignore
  helpContents: { title, description, items },
} = props;
</script>

<template name="HelpSection">
  <section id="help" class="bg-primary text-white">
    <div class="container">
      <div class="flex flex-col justify-center items-center space-y-10">
        <div class="text-center inline-flex flex-col space-y-8">
          <h3 class="title text-4xl text-white">{{ title }}</h3>
          <p class="description text-base text-gray-300">{{ description }}</p>
        </div>
        <div class="grid grid-cols-4 justify-between items-center">
          <div v-for="item of items" :key="item.number">
            <h3 class="font-bold text-5xl text-white">{{ item.number }}</h3>
            <p class="text-lg text-white">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
