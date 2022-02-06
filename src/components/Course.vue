<template>
  <v-card class="courseCard" elevation="10"
          max-width="300" color="#272727">
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-1">
          {{ courseID }}
        </div>
        <v-list-item-title class="text-h5 mb-1">
          {{ title }}
        </v-list-item-title>
        <v-list-item-subtitle>{{ sws }} SWS</v-list-item-subtitle>
        <v-list-item-subtitle>Teacher: {{ teacher }}</v-list-item-subtitle>
        <v-list-item-subtitle>Location: {{ location }}</v-list-item-subtitle>
        <v-list-item-subtitle>Time: {{ time }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-card-actions>
      <v-btn
          text
          color="#E95A24"
          @click="reveal = !reveal"
      >
        <v-icon>{{ reveal ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        Details</v-btn>
    </v-card-actions>
    <v-expand-transition id="details">
      <div v-show="reveal" >
        <v-divider></v-divider>

        <v-card-text>
          <p>Requirements: TBD</p>
          <p>Description: This is the most interesting course you will ever take.</p>
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  name: "Course",
  components: {},
  props: {
    title: String,
    teacher: String,
    location: String,
    time: String,
    courseID: String,
    sws: Number,
  },
  data: () => ({
    reveal: false,
  }),
};
</script>

<style scoped>
.courseCard {
  cursor: pointer;
  float: left;
  margin: 10px ;
}
</style>
