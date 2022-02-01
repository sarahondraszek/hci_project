<template>
  <v-container>
    <v-row>
      <v-col>
        <Description/>
        <Login/>
      </v-col>
      <v-col>
        <News/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import Description from "@/components/Description";
import News from "@/components/News";
import Login from "@/components/Login";

export default {
  name: 'Home',
  components: {
    Login,
    Description,
    News,
  }
}
</script>
