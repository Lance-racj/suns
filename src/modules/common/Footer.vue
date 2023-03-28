<template>
  <div class="mt-32">
    <h3 class="text-center uppercase">{{ curYear }} weitang</h3>
    <h3 class="text-center">
      <span class="mr-4 cursor-pointer">搜索</span>
      <router-link class="mr-4 cursor-pointer" to="/about">关于</router-link>
      <a href="mailto:lzc1617479219@gmail.com" class="cursor-pointer">联系</a>
    </h3>
  </div>
</template>

<script lang="ts">
import day from "dayjs";
export default{
  computed: {
    curYear() {
      return day().year();
    }
  }
};
</script>
