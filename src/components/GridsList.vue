<!--
 * @Author: your name
 * @Date: 2019-11-14 14:03:37
 * @LastEditTime: 2019-11-14 14:05:36
 * @LastEditors: Please set LastEditors
 * @Description: 设置左边大块右边两行共四个
 * @FilePath: /vue-css-demo/src/components/GridsList_2.vue
 -->
<template>
  <div>
    <div class="grid-row" v-for="(item , index) in data" :key="index">
      <div class="grid-row1" @click="titleClick(item)">{{item.name}}</div>
      <div class="grid-row-content">
        <div class="grid-row2">
          <div
            class="grid-row2-1"
            v-for="(rows,rowIndex) in item.list"
            :key="rowIndex"
            :style="getStyle(item)"
            @click="contentClick(rows)"
          >{{rows}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GridList",
  props: {
    data: {
      type: Array,
      default: null
    }
  },
  methods: {
    getStyle(items) {
      return "background-color:" + items.color;
    },
    titleClick(item) {
      this.$emit("titleClick",item);
    },
    contentClick(item) {
      this.$emit("contentClick",item);
    }
  }
};
</script>

<style scoped>
@import "../assets/css/grid.css";
</style>