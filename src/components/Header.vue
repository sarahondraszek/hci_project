<template>
  <body>
  <header id="page-header">
    <img id="sg-ig" src="../assets/spacegate54.png" alt="Welcome to SpaceGate54!"/>
      <h1 id="page-title">
        {{pagetitle}}
      </h1>
  </header>
  </body>
</template>

<script>

export default {
  name: "Header",
  props: ["pagetitle"]
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Audiowide');

body {margin:0;}

header {margin: 0; color: white; height: auto; width: auto; overflow: auto; background-color:#575757; border: solid #1c1c1b}

 #sg-ig {
   margin: 10px;
   width: 100px;
   height: 100px;
   float: left;
 }
 #page-title {
   font-family: "Audiowide", sans-serif;
   font-size: 40px;
   color: #b05020;
   float: left;
 }

</style>