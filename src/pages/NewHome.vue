<template>
  <div>
    <GridPageUtil :data="item" />
  </div>
</template>

<script>

const GridPageUtil = () => import('../Utils/GridPageUtil.vue');

export default {
  components: {
    GridPageUtil
  },
  data() {
    return {
      item: [
        {
          type: "list_1",
          data: [
            {
              title: "你好1_1",
              color: "#44c522",
              list: ["1", "2", "3", "4", "5", "6"]
            },
            {
              title: "你好2_2",
              color: "#3d98ff",
              list: ["1", "2", "3", "4", "5", "6"]
            }
          ]
        },
        {
          type: "list_0",
          data: [
            {
              title: "你好1",
              color: "#44c522",
              list: ["1", "2", "3", "4"]
            },
            {
              title: "你好2",
              color: "#3d98ff",
              list: ["1", "2", "3", "4"]
            },
            {
              title: "你好3",
              color: "#fc9720",
              list: ["1", "2", "3", "4"]
            },
            {
              title: "你好4",
              color: "#ff697a",
              list: ["1", "2", "3", "4"]
            }
          ]
        },
        {
          type: "list_2",
          data: [
            {
              title: "你好3_1",
              color: "#44c522",
              list: ["1", "2", "3", "4", "5"]
            },
            {
              title: "你好3_2",
              color: "#3d98ff",
              list: ["1", "2", "3", "4"]
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