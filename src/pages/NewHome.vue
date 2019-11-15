<template>
  <div>
    <Swiper :data="data.swiperItem" />
    <GridPageUtil :data="data.gridItem" />
  </div>
</template>

<script>
const GridPageUtil = () => import("../Utils/GridPageUtil.vue");

const Swiper = () => import("../components/Swiper.vue");

export default {
  components: {
    GridPageUtil,
    Swiper
  },
  data() {
    return {
      data: {
        swiperItem: [
          {
            imgUrl: "https://m.cifm.com/src/theme/img/3.5/index-banner0.png"
          },
          {
            imgUrl: "https://m.cifm.com/src/theme/img/3.5/index-banner1.png"
          },
          {
            imgUrl: "https://m.cifm.com/src/theme/img/3.5/index-banner2.png"
          },
          {
            imgUrl: "https://m.cifm.com/src/theme/img/3.5/index-banner3.png"
          }
        ],
        gridItem: [
          {
            type: "swiper",
            data: [
              {
                imgUrl: "https://m.cifm.com/src/theme/img/3.5/index-banner0.png"
              },
              {
                imgUrl: "https://m.cifm.com/src/theme/img/3.5/index-banner1.png"
              },
              {
                imgUrl: "https://m.cifm.com/src/theme/img/3.5/index-banner2.png"
              },
              {
                imgUrl: "https://m.cifm.com/src/theme/img/3.5/index-banner3.png"
              }
            ]
          },
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
      }
    };
  },
  methods: {}
};
</script>

<style scoped>
</style>