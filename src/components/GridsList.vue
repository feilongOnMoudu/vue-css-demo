<template>
  <div>
    <div class="row" v-for="(item , index) in data" :key="index">
      <div class="row1">{{item.name}}</div>
      <div class="row-content">
        <div
          class="row2"
          v-for="(rows,rowIndex) in item.list"
          :key="rowIndex"
          :style="getStyle(item)"
        >{{rows}}</div>
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
    }
  }
};
</script>

<style scoped>
@import "../assets/css/grid.css";
</style>