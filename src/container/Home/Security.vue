<script setup lang="ts">
import securityImg from "@/assets/images/home/security/security-img.png";
interface ExtraContent {
  title: string;
  description: string;
}

interface SecurityContents {
  title: string;
  description: string;
  extra: ExtraContent[];
}
const props = defineProps<{
  securityContents: SecurityContents;
}>();
const { securityContents } = props;
</script>

<template name="Security">
  <section id="security">
    <div class="container">
      <div class="flex justify-center items-center">
        <div>
          <div>
            <h3>{{ securityContents.title }}</h3>
          </div>
        </div>
        <div>
          <img :src="securityImg" alt="Security Image" />
        </div>
      </div>
    </div>
  </section>
</template>
