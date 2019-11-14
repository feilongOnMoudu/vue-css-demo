<!--
 * @Author: your name
 * @Date: 2019-11-14 14:03:37
 * @LastEditTime: 2019-11-14 15:23:30
 * @LastEditors: Please set LastEditors
 * @Description: 可以设置一个有多少个的样式
 * @FilePath: /vue-css-demo/src/components/GridsList_2.vue
 -->
<template>
  <div>
    <div class="grid-row-no-height" v-for="(item , index) in data" :key="index">
      <div class="grid-continer-div">
        <ModuleTitle :data="item" @titleClick="titleClick"/>
        <div class="grid-content-div">
          <div class="grid-row3-no-height" :style="getStyle1(item)">
            <div
              class="grid-row3-no-height-1"
              v-for="(rows,rowIndex) in item.list"
              :key="rowIndex"
              :style="getStyle(item)"
              @click="contentClick(rows)"
            >
              <img
                src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573723253596&di=c88c4809f3b27ace20938098cabc3bb1&imgtype=0&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F01%2F18%2F96%2F59051eca0ce28_610.jpg"
              />
              <div>{{rows}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

const ModuleTitle = ()=> import('../components/ModuleTitle.vue');

export default {
  name: "GridList_2",
  components: {
    ModuleTitle
  },
  props: {
    data: {
      type: Array,
      default: null
    },
    colums: {
      type: Number,
      default: 3
    }
  },
  methods: {
    getStyle(items) {
      return "background-color:" + items.color;
    },
    getStyle1(item) {
      return "grid-template-columns: repeat( " + item.list.length + ",auto)";
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