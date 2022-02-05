<template>
  <v-container>
    <v-row>
      <v-col>
        <Welcome/>
      </v-col>
      <v-col>
        <News/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Welcome from "@/components/Welcome";
import News from "@/components/News";

export default {
  name: 'StudentLanding',
  components: {
    Welcome,
    News,
  }
}
</script>
