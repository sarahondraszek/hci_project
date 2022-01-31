<template>
  <v-container>
    <v-row>
      <v-col>
        <Description/>
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

export default {
  name: 'Landing',
  components: {
    Description,
    News,
  }
}
</script>
