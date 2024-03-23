<script setup lang="ts">
import { ImgType } from "../../interfaces/homeInterface";

interface ExtraContent {
  title: string;
  description: string;
}

interface SecurityContents {
  title: string;
  description: string;
  extra: ExtraContent[];
  securityImg: ImgType;
}
const props = defineProps<{
  securityContents: SecurityContents;
}>();
const {
  // @ts-ignore
  securityContents: { title, description, securityImg },
} = props;
</script>

<template name="Security">
  <section id="security">
    <div class="container">
      <div class="flex justify-center items-center">
        <div>
          <div>
            <h3>{{ title }}</h3>
          </div>
        </div>
        <div>
          <img :src="securityImg.src" :alt="securityImg.alt" />
        </div>
      </div>
    </div>
  </section>
</template>
