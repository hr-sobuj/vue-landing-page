<script setup lang="ts">
// @ts-ignore
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
// @ts-ignore
import { MinusIcon, PlusIcon } from "@heroicons/vue/20/solid";
import { defineProps } from "vue";

interface AccordionType {
  title: string;
  description: string;
}

const props = defineProps<{
  accordion: AccordionType;
}>();

const {
  // @ts-ignore
  accordion: { title, description },
} = props;
</script>

<template>
  <div class="w-full">
    <Disclosure v-slot="{ open }">
      <DisclosureButton
        class="flex w-full justify-between rounded-lg text-left"
      >
        <span class="text-xl font-bold title">{{ title }}</span>
        <template v-if="open">
          <MinusIcon class="h-5 w-5 font-bold" />
        </template>
        <template v-else>
          <PlusIcon class="h-5 w-5 font-bold" />
        </template>
      </DisclosureButton>
      <transition
        enter-active-class="transition-opacity ease-out duration-300"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity ease-in duration-200"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <DisclosurePanel class="pb-2 pt-4 text-sm text-gray-500" v-show="open">
          {{ description }}
        </DisclosurePanel>
      </transition>
    </Disclosure>
  </div>
</template>
