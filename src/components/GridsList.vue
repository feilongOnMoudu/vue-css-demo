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