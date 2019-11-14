<!--
 * @Author: your name
 * @Date: 2019-11-13 13:13:16
 * @LastEditTime: 2019-11-14 17:38:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-css-demo/src/Utils/GridPageUtil.vue
 -->
<template>
  <div>
    <div v-for="(item ,index) in data" :key="index">
      <component
        :is="getPage(item)"
        :data="item.data"
        @titleClick="titleClick"
        @contentClick="contentClick"
      ></component>
    </div>
  </div>
</template>

<script>
// import(/* webpackChunkName: "GridsList" */ '../components/GridsList.vue'); 可以把声明的组件打包在GridsList-GridsList.2fdd8c6f.js的js文件中
const GridsList_0 = () => import(/* webpackChunkName: "GridsList" */ '../components/GridsList_0.vue');
const GridsList_1 = () => import(/* webpackChunkName: "GridsList" */ '../components/GridsList_1.vue');
const GridsList_2 = () => import(/* webpackChunkName: "GridsList" */ '../components/GridsList_2.vue');

export default {
  components: {
    GridsList_0,
    GridsList_1,
    GridsList_2
  },
  props: {
    data: {
      type: Array,
      default: null
    }
  },
  methods: {
    getPage(item) {
      switch (item.type) {
        case "list_0":
          return "GridsList_0";
        case "list_1":
          return "GridsList_1";
          case "list_2":
          return "GridsList_2";

        default:
          break;
      }
    },
    titleClick(item) {
      console.log(item);
    },
    contentClick(item) {
      console.log(item);
    }
  }
};
</script>
