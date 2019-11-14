<!--
 * @Author: your name
 * @Date: 2019-11-13 13:13:16
 * @LastEditTime: 2019-11-14 14:18:30
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
import GridsList from "../components/GridsList.vue";
import GridsList_1 from "../components/GridsList_1.vue";
import GridsList_2 from "../components/GridsList_2.vue";

export default {
  components: {
    GridsList,
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
          return "GridsList";
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
