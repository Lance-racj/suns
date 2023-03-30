<template>
  <div class="flex items-center justify-between max-w-5xl p-4 mx-auto bg-white">
    <section>
      <router-link to="/" class="text-4xl uppercase p-[5px] logo sm:text-3xl lg:text-4xl">weitang</router-link>
    </section>
    <section>
      <router-link to="/about" class="p-3 uppercase">about</router-link>
    </section>
  </div>
</template>

<script lang="ts">
export default {

}
</script>

<style lang="postcss" scoped>
.logo {
  font-family: Lora, "Noto Serif SC", serif;
  font-weight: 500;
}
.router-link-exact-active {
  @apply bg-gray-200 rounded;
}

</style>
