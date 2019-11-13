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

export default {
  components: {
    GridsList,
    GridsList_1
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
