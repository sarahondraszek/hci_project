<template>
  <v-card
      class="mx-auto"
      max-width="800"
  >
    <v-toolbar
        color="#E95A24"
        dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Course list</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-checkbox-marked-circle</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-toolbar>
    <v-list two-line>
      <v-list-item-group
          v-model="selected"
          active-class="orange--text"
          multiple
      >
        <template v-for="(item, index) in items">
          <v-list-item :key="item.title">
            <template v-slot:default="{ active }">
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>

                <v-list-item-subtitle
                    class="text--primary"
                    v-text="item.headline"
                ></v-list-item-subtitle>

                <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action>
                <v-list-item-action-text v-text="item.action"></v-list-item-action-text>

                <v-icon
                    v-if="!active"
                    color="grey lighten-1"
                >
                  mdi-delete-outline
                </v-icon>
                <v-icon
                    v-else
                    color="orange darken-3"
                >
                  mdi-delete
                </v-icon>
              </v-list-item-action>
            </template>
          </v-list-item>
          <v-divider
              v-if="index < items.length - 1"
              :key="index"
          ></v-divider>
        </template>
      </v-list-item-group>
    </v-list>
    <v-row class="px-3 pt-1">
      <v-col class="text-left">
        <router-link style="text-decoration: none; color: inherit;" to="/student/courses">
          <v-btn
              elevation="2"
          >Return to courses
          </v-btn>
        </router-link>
      </v-col>
      <v-col class="text-right">
        <v-btn
            elevation="2">Confirm
        </v-btn>
      </v-col>
    </v-row>


  </v-card>
</template>

<script>
export default {
  name: "Bookbag",
  data: () => ({
    selected: [],
    items: [
      {
        action: 'Pflicht',
        headline: 'Info',
        subtitle: `Kurze Beschreibung des Kurses`,
        title: 'Einführung in die BWL',
        sws: 5
      },
      {
        action: 'Pflicht',
        headline: 'Info',
        subtitle: `Kurze Beschreibung des Kurses`,
        title: 'Einführung in die VWL',
        sws: 5
      },
      {
        action: 'Pflicht',
        headline: 'Info',
        subtitle: `Kurze Beschreibung des Kurses`,
        title: 'Mathe 1',
        sws: 10
      },
    ],
  }),
}
</script>

<style scoped>

</style>