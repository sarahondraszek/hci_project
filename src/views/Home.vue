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

import Description from "@/components/shared/Home_Landing/Description";
import News from "@/components/shared/Home_Landing/News";
import Login from "@/components/shared/Home_Landing/Login";

export default {
  name: 'Home',
  components: {
    Login,
    Description,
    News,
  }
}
</script>
