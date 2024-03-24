<script setup lang="ts">
import { ImgType } from "@interfaces/homeInterface";

interface LinksType {
  name: string;
  url: string;
}

interface SocialType extends ImgType {
  url: string;
}

interface FooterContent {
  logo: ImgType;
  description: string;
  phone: string;
  email: string;
  playIcon: ImgType;
  appStore: ImgType;
  usefulLinks: LinksType[];
  helpAndSupport: LinksType[];
  resources: LinksType[];
  copyRight: string;
  socialIcons: SocialType[];
}

const props = defineProps<{
  footerContents: FooterContent;
}>();

const {
  footerContents:
    // @ts-ignore
    {
      logo,
      description,
      phone,
      email,
      playIcon,
      appStore,
      usefulLinks,
      helpAndSupport,
      resources,
      copyRight,
      socialIcons,
    },
} = props;
</script>

<template name="Footer">
  <footer id="footer" class="bg-secondary2">
    <div class="container flex flex-col space-y-10">
      <div
        class="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-28 text-white"
      >
        <div class="md:basis-2/5 flex flex-col space-y-6">
          <div>
            <img :src="logo.src" :alt="logo.alt" />
          </div>
          <div class="flex flex-col space-y-8">
            <p class="text-grayIcon text-base">{{ description }}</p>
            <div class="flex flex-col space-y-7">
              <div class="flex flex-col justify-start items-start space-y-1">
                <p
                  class="inline-flex space-x-1 items-center justify-center text-grayIcon"
                >
                  <span
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                      />
                    </svg>
                  </span>
                  <span>{{ phone }}</span>
                </p>
                <p
                  class="inline-flex space-x-1 items-center justify-center text-grayIcon"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                      />
                    </svg>
                  </span>
                  <span>
                    {{ email }}
                  </span>
                </p>
              </div>
              <div class="flex space-x-4">
                <a href="#">
                  <img :src="playIcon.src" :alt="playIcon.alt" />
                </a>
                <a href="#">
                  <img :src="appStore.src" :alt="appStore.alt" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          class="md:basis-3/5 grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-y-0 justify-between items-center"
        >
          <ul class="flex flex-col md:justify-self-end space-y-4">
            <h3 class="font-bold font-spaceGrotesk">Useful Link</h3>
            <li v-for="usefulLink of usefulLinks" :key="usefulLink.name">
              <a :href="usefulLink.url" class="text-grayIcon">{{
                usefulLink.name
              }}</a>
            </li>
          </ul>
          <ul class="flex flex-col md:justify-self-end space-y-4">
            <h3 class="font-bold font-spaceGrotesk">Help & Support</h3>
            <li v-for="helpLink of helpAndSupport" :key="helpLink.name">
              <a :href="helpLink.url" class="text-grayIcon">{{
                helpLink.name
              }}</a>
            </li>
          </ul>
          <ul class="flex flex-col md:justify-self-end space-y-4">
            <h3 class="font-bold font-spaceGrotesk">Resources</h3>
            <li v-for="resourcesLink of resources" :key="resourcesLink.name">
              <a :href="resourcesLink.url" class="text-grayIcon">{{
                resourcesLink.name
              }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex justify-between items-center text-white">
        <p class="text-grayIcon">
          {{ copyRight }}
        </p>
        <ul class="flex space-x-10">
          <li v-for="(socialIcon, key) of socialIcons" :key="key">
            <a :href="socialIcon.url"
              ><img
                :src="socialIcon.src"
                :alt="socialIcon.alt"
                class="w-6 h-6"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
