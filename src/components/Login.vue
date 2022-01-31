<template>
  <v-container>
    <v-row>
      <v-col
          cols="12"
          md="12"
      >
    <h2 id ="h2">Your Way into Space</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col
          cols="12"
          md="6"
      >
        <v-text-field
            v-model="username"
            color="#E65100"
            :rules="nameRules"
            :counter="10"
            label="Username"
            required
        ></v-text-field>
      </v-col>

      <v-col
          cols="12"
          md="6"
      >
        <v-text-field
            color="#E65100"
            :value="userPassword"
            v-model="password"
            label="Password"
            required
            :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="() => (value = !value)"
            :type="value ? 'password' : 'text'"
            @input="_=>userPassword=_"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-right">

        <router-link style="text-decoration: none; color: inherit;" to="/student"><v-btn
            elevation="2"
        >Login</v-btn></router-link>
      </v-col>
    </v-row>
    </v-container>
</template>

<script>
export default {
  name: "Login",
  props: ["title"],
  data: () => ({
    valid: false,
    username: '',
    password: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 10 || 'Name must be less than 10 characters',
    ], }),
  }
</script>

<style scoped>
input {
  background-color: #393939;
  color: #DDDDDD;
}
#h2 {
  text-align: center;
  color: #FFFFFF;
  background-color: #E95A24;
}

</style>