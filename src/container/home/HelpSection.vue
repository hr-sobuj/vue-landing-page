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
      <div class="flex flex-col justify-center items-center">
        <div class="text-center">
          <h3>{{ title }}</h3>
          <p>{{ description }}</p>
        </div>
        <div class="flex">
          <div v-for="item of items" :key="item.number">
            <h3>{{ item.number }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
