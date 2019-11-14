<template>
  <div class="module-title" @click="titleClick(data)">{{data.title}}</div>
</template>

<script>
export default {
  name: "ModuleTitle",
  props: {
    data: {
      type: Object,
      default: null
    }
  },
  methods: {
    titleClick(data) {
      this.$emit("titleClick",data);
    },
  }
};
</script>

<style>
@import "../assets/css/moduleTitle.css";
</style>