<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <Welcome/>
      </v-col>
      <v-col cols="6">
        <News/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Welcome from "@/components/Welcome";
import News from "@/components/News";

export default {
  name: 'Landing',
  components: {
    Welcome,
    News,
  }
}
</script>
