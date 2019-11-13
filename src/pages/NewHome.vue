<template>
  <div>
    <GridUtil :data="item"/>
  </div>
</template>

<script>
import GridUtil from "../Utils/GridUtil.vue";

export default {
  components: {
    GridUtil
  },
  data() {
    return {
      item: [
        {
          type: "list_0",
          data: [
            {
              name: "你好1",
              color: "#44c522",
              list: ["1", "2", "3", "4"]
            },
            {
              name: "你好2",
              color: "#3d98ff",
              list: ["1", "2", "3", "4"]
            },
            {
              name: "你好3",
              color: "#fc9720",
              list: ["1", "2", "3", "4"]
            },
            {
              name: "你好4",
              color: "#ff697a",
              list: ["1", "2", "3", "4"]
            }
          ]
        },
        {
          type: "list_1",
          data: [
            {
              name: "你好1_1",
              color: "#44c522",
              list: ["1", "2", "3", "4", "5", "6"]
            },
            {
              name: "你好2_2",
              color: "#3d98ff",
              list: ["1", "2", "3", "4", "5", "6"]
            }
          ]
        }
      ]
    };
  },
  methods: {}
};
</script>

<style scoped>
</style>