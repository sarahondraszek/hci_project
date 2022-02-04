<template>
  <v-container>
    <v-card elevation="10"
            max-width="300">
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
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Course",
  props: {
    title: String,
    teacher: String,
    location: String,
    time: String,
    src: String,
    courseID: String,
    sws: Number,
  },
  data() {
    return {};
  }
};
</script>

<style scoped>

</style>
