<template>
    <div id="app">
      <Header pagetitle="SpaceGate 54" />
      <Navigation></Navigation>
      <div class="row">
        <div class="column">
          <Description/>
        </div>
        <div class="column">
          <Login/>
        </div>
        <div class="column">
          <News/>
        </div>
      </div>
    </div>
</template>

<script>
import Header from "@/components/Header";
import Login from "@/components/Login";
import Navigation from "@/components/Navigation";
import Description from "@/components/Description";
import News from "@/components/News.vue"

export default {
  name: 'App',
  components: {
    Header,
    Login,
    Navigation,
    Description,
    News
  }
}
</script>

<style>
html {
  background-color: #545454;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

#app {
  font-family: "A Day in September", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.column {
  float: left;
  width: 30vw;
  height: 200px;
  padding: 15px;
  border: solid #1c1c1b;
  overflow: auto;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

@media screen and (max-width:600px) {
  .column {
    width: 100%;
  }
}
</style>
