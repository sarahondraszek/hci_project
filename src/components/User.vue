<template>
      <v-menu
          bottom
          left
          min-width="200px"
          rounded
          offset-y
      >
        <template v-slot:activator="{ on }">
          <v-btn
              icon
              x-large
              v-on="on"
          >
            <v-avatar
                color="#E95A24"
                size="48"
            >
              <span class="white--text text-h5">{{ initials }}</span>
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-list-item-content class="justify-center">
            <div class="mx-auto text-center">
              <v-avatar
                  color="#E95A24"
              >
                <span class="white--text text-h5">{{ initials }}</span>
              </v-avatar>
              <h3>{{ fullName }}</h3>
              <p class="text-caption mt-2">
                <v-icon>mdi-email</v-icon>
                {{ email }}
              </p>
              <v-divider class="my-3"></v-divider>
              <v-btn
                  depressed
                  rounded
                  text
              >
                <v-icon>mdi-account-cog</v-icon>
                 Edit Account
              </v-btn>
              <v-divider class="my-3"></v-divider>
              <v-btn
                  depressed
                  rounded
                  text
              >
                <v-icon>mdi-logout</v-icon>
                 Log out
              </v-btn>
            </div>
          </v-list-item-content>
        </v-card>
      </v-menu>
</template>

<script>
export default {
  name: "User",
  props: {
    initials : String,
    fullName: String,
    email: String,
  }
}
</script>

<style scoped>

</style>