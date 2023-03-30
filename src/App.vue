<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script lang="ts">
export default {
};
</script>

<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  font-size: 18px;
}

#app {
  @apply text-gray-900;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #1a202c;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

h3 {
  @apply text-xl;
}
</style>
