<template>
  <div id="app" class="main">
    <div class="top-box">
      <keep-alive>
        <router-view :key="key"></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>


export default {
  name: "app",
  components: {
    
  },
  computed: {
    key() {
      return this.$route.path;
    }
  }
};
</script>

<style>

</style>
