<template>
  <nav>
    <div class="row">
      <div class="row1">你好</div>
      <div class="row1 row1-1">
          <div>你好</div>
          <div>你好</div>
        </div>
      <div class="row1 row1-1">
          <div>你好</div>
          <div>你好</div>
        </div>
    </div>
    
    <div class="row">
      <div class="row1">你好</div>
      <div class="row1 row1-1">
          <div>你好</div>
          <div>你好</div>
        </div>
      <div class="row1 row1-1">
          <div>你好</div>
          <div>你好</div>
        </div>
    </div>

    <div class="row">
      <div class="row1">你好</div>
      <div class="row1 row1-1">
          <div>你好</div>
          <div>你好</div>
        </div>
      <div class="row1 row1-1">
          <div>你好</div>
          <div>你好</div>
        </div>
    </div>

    <div class="row">
      <div class="row1 row1-1">
          <div>你好</div>
          <div>你好</div>
        </div>
      <div class="row1 row1-1">
          <div>你好</div>
          <div>你好</div>
        </div>
      <div class="row1 row1-1">
          <div>你好</div>
          <div>你好</div>
        </div>
    </div>
    
  </nav>
</template>

<script>

export default {
  name: "Home",
  components : {
    GridsList
  }
};
</script>

<style scoped>
nav {
  padding: 5px;
}

.row {
  width: 100%;
  background-color: #ff697a;
  height: 90px;
  border-radius: 8px;
  display: flex; 
  margin-bottom: 5px;
}

nav .row:nth-child(2) {
  background-color: #44c522;
}

nav .row:nth-child(3) {
  background-color:#3d98ff;
}

nav .row:nth-child(4) {
  background-color:#fc9720;
}

.row1 {
  flex: 1;
  text-align: center;
  line-height: 90px;
  border-left: 1px solid #fff;
}

.row div:first-child {
  border: 0;
}

.row1-1 {
  display: flex;
  flex-direction: column;
}

.row1-1 div {
  flex:1;
  color: yellow;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  line-height: 45px;
}

.row1-1 div:first-child {
  border-bottom: 1px solid #fff; 
}



</style>