<script setup lang="ts">
// @ts-ignore
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronUpIcon } from "@heroicons/vue/20/solid";

interface ItemType {
  title: string;
  description: string;
}

const props = defineProps<{
  accordion: ItemType;
}>();

const {
  // @ts-ignore
  accordion: { title, description },
} = props;
</script>

<template name="PerformanceAccordion">
  <div class="w-full">
    <div class="mx-auto w-full bg-white">
      <Disclosure v-slot="{ open }">
        <DisclosureButton
          class="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75"
        >
          <span>{{ title }}</span>
          <ChevronUpIcon
            :class="open ? 'rotate-180 transform' : ''"
            class="h-5 w-5 text-purple-500"
          />
        </DisclosureButton>
        <DisclosurePanel class="px-4 pb-2 pt-4 text-sm text-gray-500">
          {{ description }}
        </DisclosurePanel>
      </Disclosure>
    </div>
  </div>
</template>
