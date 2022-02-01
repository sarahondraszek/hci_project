<template>
  <v-container>
    <v-card elevation="2"
            max-width="344">
      <v-list-item three-line>
        <v-list-item-content>
          <div class="text-overline mb-4">
            {{ courseid }}
          </div>
          <v-list-item-title class="text-h5 mb-1">
            {{ title }}
          </v-list-item-title>
          <v-list-item-subtitle>Kurze Beschreibung des Kurses</v-list-item-subtitle>
          <v-list-item-subtitle>Professor: {{ teacher }}</v-list-item-subtitle>
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
    courseid: String
  },
  data() {
    return {};
  }
};
</script>
