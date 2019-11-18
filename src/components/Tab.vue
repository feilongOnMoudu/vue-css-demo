<template>
  <div class="container">
    <div class="content">
      <div v-for="(item, index) in data" :key="index" class="item" @click="handleClick(item)">
        <img :src="item.imgUrl" />
          <div>{{item.title}}</div>
      </div>
    </div>
  </div>
</template>


<script>
import Setting from "../../setting";

export default {
  name: "Tab",
  data() {
    return {
      data: Setting.tab
    };
  },
  methods: {
    handleClick(item) {
      if(this.$route.path === item.url) {
        return;
      }
      this.$router.push({path:item.url});
    }
  }
};
</script>


<style scoped>
@import "../assets/css/tab.css";
</style>