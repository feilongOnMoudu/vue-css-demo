<template>
  <div>
    456
    <strong>
      12321
    </strong>
    <div id="text">
      宋飞龙
      <p>666</p>
    </div>
    <div class="class-demo">
      2323
      <p>
        sssssssss
      </p>
      
    </div>
    <p title="asd">
        asdsadasdasd asd
    </p>
    <p title="asd s">
        sds
    </p>
    <input type="text" />
    <input type="button" />
  </div>
</template>

<script>
export default {
  name:'DemoCss'
}
</script>

<style scoped>
/* 派生选择器 */
div strong { 
  color: red;
}

/* id选择器 */
#text {
  color: green;
}

/* id+派生选择器 */
#text p {
  color: blue;
}

div#text {
  border: 1px dotted #000;
}

/* 类选择器
类名的第一个字符不能使用数字！它无法在 Mozilla 或 Firefox 中起作用。
*/
.class-demo {
  color: rgb(122, 55, 100)
}

.class-demo p {
  color : brown
}

/* 属性选择器  标签包含有title对应的值的*/
/* 属性和值选择器 - 多个值  title=asd 执行此样式*/
[title~=asd] {
  color: red
}

/* 以指定值开头的属性值的元素 */
[title|=asd] {
  color: blue
}

/* 属性选择器在为不带有 class 或 id 的表单设置样式时特别有用： */
input[type="text"] {
  background-color: yellow;
  display:block;
  margin-bottom: 20px;
  width: 100px;
}

input[type="button"] {
  background-color: aqua;
  width: 100px;
}



</style>