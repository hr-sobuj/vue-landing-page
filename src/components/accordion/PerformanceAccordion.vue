<script setup lang="ts">
// @ts-ignore
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  TransitionRoot,
} from "@headlessui/vue";
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
    <TransitionRoot
      :show="true"
      enter-active-class="transition transform ease-out duration-500"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition transform ease-in duration-300"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
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
        <TransitionRoot
          :show="open"
          enter-active-class="transition-opacity ease-out duration-500"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="transition-opacity ease-in duration-300"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <DisclosurePanel
            class="pb-2 pt-4 text-sm text-gray-500"
            :class="{ 'max-h-0': !open }"
          >
            {{ description }}
          </DisclosurePanel>
        </TransitionRoot>
      </Disclosure>
    </TransitionRoot>
  </div>
</template>
