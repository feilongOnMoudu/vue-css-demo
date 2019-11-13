<template>
  <div>
    <GridsList 
    :data="newData.data" 
    @titleClick="titleClick"
    @contentClick="contentClick"/>
  </div>
</template>

<script>
import GridsList from '../components/GridsList.vue'

export default {
  data() {
    return {
      newData: {
        data: [
          {
            name:'你好1',
            color:'#44c522',
            list: [
              '1','2','3','4'
            ]
          },
          {
            name:'你好2',
            color:'#3d98ff',
            list: [
              '1','2','3','4'
            ]
          },
          {
            name:'你好3',
            color:'#fc9720',
            list: [
              '1','2','3','4'
            ]
          },{
            name:'你好4',
            color:'#ff697a',
            list: [
              '1','2','3','4'
            ]
          }
        ]
      }
    }
  },
  components: {
    GridsList
  },
  methods: {
    titleClick(item) {
      console.log(item);
    },
    contentClick(item) {
      console.log(item);
    }
  }
}
</script>

<style scoped>

</style>