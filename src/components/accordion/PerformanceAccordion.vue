<!-- <script setup lang="ts">
import { Disclosure } from "@headlessui/vue";
import { ref } from "vue";

const disclosureOpen = ref(false);

const handleDisclosureChange = (value: boolean) => {
  disclosureOpen.value = value;
};
</script>

<template name="DisClosure">
  <div class="w-full px-4 pt-16">
    <div class="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
      <Disclosure :open="disclosureOpen" @change="handleDisclosureChange">
        <template #button="{ open }">
          <button
            class="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75"
          >
            <span>What is your refund policy?</span>
          </button>
        </template>
        <template #default>
          <div class="px-4 pb-2 pt-4 text-sm text-gray-500">
            If you're unhappy with your purchase for any reason, email us within
            90 days and we'll refund you in full, no questions asked.
          </div>
        </template>
      </Disclosure>
      <Disclosure :open="disclosureOpen" @change="handleDisclosureChange">
        <template #button="{ open }">
          <button
            class="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75"
          >
            <span>Do you offer technical support?</span>
          </button>
        </template>
        <template #default>
          <div class="px-4 pb-2 pt-4 text-sm text-gray-500">No.</div>
        </template>
      </Disclosure>
    </div>
  </div>
</template> -->
