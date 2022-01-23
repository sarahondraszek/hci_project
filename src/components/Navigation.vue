<template>
  <div class="topnav">
    <a href="../App.vue">Homepage</a>
    <a href="https://www.youtube.com/watch?v=bHOr-k2QSxg">Don't Click</a>
  </div>
</template>

<script>
export default {
  name: "Navigation"
}
</script>

<style scoped>
.topnav {
  overflow: hidden;
  background-color: #333;
}

.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}
</style>