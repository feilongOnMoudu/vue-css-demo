<!--
 * @Author: your name
 * @Date: 2019-11-14 14:03:37
 * @LastEditTime: 2019-11-14 15:23:20
 * @LastEditors: Please set LastEditors
 * @Description: 设置一行三个 
 * @FilePath: /vue-css-demo/src/components/GridsList_2.vue
 -->
<template>
  <div>
    <div class="grid-row" v-for="(item , index) in data" :key="index">
      <div class="grid-continer-div">
        <ModuleTitle :data="item" @titleClick="titleClick"/>
        <div class="grid-content-div">
          <div class="grid-row3">
            <div
              class="grid-row3-1"
              v-for="(rows,rowIndex) in item.list"
              :key="rowIndex"
              :style="getStyle(item)"
              @click="contentClick(rows)"
            >{{rows}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

const ModuleTitle = ()=> import('../components/ModuleTitle.vue');

export default {
  name: "GridList_1",
  components: {
    ModuleTitle
  },
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
      this.$emit("titleClick", item);
    },
    contentClick(item) {
      this.$emit("contentClick", item);
    }
  }
};
</script>

<style scoped>
@import "../assets/css/grid.css";
</style>