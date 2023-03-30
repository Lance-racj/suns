<template>
  <div class="home">
    <DocList></DocList>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import DocList from "@/modules/docs/DocList.vue";

export default Vue.extend({
  name: "Home",
  components: {
    DocList
  },
  async created() {
    
  }
});
</script>
