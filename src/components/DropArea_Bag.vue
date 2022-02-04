<template>
  <v-card class="pa-md-4" color="dark-grey" min-height="50px">
    <v-img src="@/assets/book-bag.png" contain></v-img>
    <v-card-actions class="justify-center">
      <router-link style="text-decoration: none; color: inherit;" to="/bookbag">
        <v-btn
            outlined
            rounded
            text
            color="orange accent-4"
        >
          View Bookbag
        </v-btn>
      </router-link>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "DropArea_Bag"
}
</script>

<style scoped>

</style>