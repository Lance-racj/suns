<template>
  <div>
    <header-vue></header-vue>
    <main>
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