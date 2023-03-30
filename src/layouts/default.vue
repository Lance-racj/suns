<template>
  <div class="flex flex-col min-h-screen">
    <header-vue></header-vue>
    <main class="max-w-[49rem] px-4 mx-auto flex-grow">
      <router-view />
    </main>
    <footer-vue></footer-vue>
  </div>
</template>

<script lang="ts">
import HeaderVue from '@/modules/common/Header.vue';
import FooterVue from '@/modules/common/Footer.vue';
export default {
  components: {
    HeaderVue,
    FooterVue
  }
}
</script>

<style lang="postcss" scoped></style>