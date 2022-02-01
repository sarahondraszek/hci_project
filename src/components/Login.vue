<template>
  <v-container>
    <v-row>
      <v-col
          cols="12"
          md="12"
      >
        <h2 id="h2">Your Way into Space</h2>
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
            :rules="[nameRules.required, nameRules.count, nameRules.exist]"
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
            :rules="[passwordRules.checkLength, passwordRules.checkLowerCase, passwordRules.checkUpperCase,
              passwordRules.checkDigit]"
            :value="userPassword"
            v-model="password"
            label="Password"
            required
            :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="() => (value = !value)"
            :type="value ? 'password' : 'password'"
            @input="_=>userPassword=_"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-right" >
        <router-link v-if="studentNames.includes(username.toLowerCase())" style="text-decoration: none;
          color: inherit;" to="/student">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                  v-bind="attrs"
                  v-on="on"
                  elevation="2"
              >
                <v-icon>mdi-rocket</v-icon>
                Off we go!
              </v-btn>
            </template>
            <span>Login as student</span>
          </v-tooltip>
        </router-link>
        <router-link v-if="teacherNames.includes(username.toLowerCase())" style="text-decoration: none;
          color: inherit;" to="/teacher">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                  v-bind="attrs"
                  v-on="on"
                  elevation="2"
                  color="#E95A24"
                  class="ml-2"
              >
                <v-icon>mdi-rocket</v-icon>
                Off we go!
              </v-btn>
            </template>
            <span>Login as teacher</span>
          </v-tooltip>
        </router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
const studentNames = ['student', 'fabian', 'kinga', 'sarah', 'chloe', 'johannes', 'will', 'hurensohn'];
const teacherNames = ['teacher', 'fabian', 'kinga', 'sarah', 'hank', 'maja'];
export default {
  name: "Login",
  props: ["title"],
  data: () => ({
    valid: false,
    username: '',
    password: '',
    nameRules: {
      required: value => !!value || 'Name is required',
      count: value => value.length <= 10 || 'Name must be less than 10 characters',
      exist: value => studentNames.includes(value.toLowerCase()) || teacherNames.includes(value.toLowerCase()) ||
          'Account not found',
    },
    passwordRules: {
      checkLength: value => value.length >= 8 || 'Password need to be at least 8 characters long',
      checkLowerCase: value => /.*[a-z].*/.test(value) || 'Password must contain lower case characters',
      checkUpperCase: value => /.*[A-Z].*/.test(value) || 'Password must contain upper case characters',
      checkDigit: value => /.*\D.*/.test(value) || 'Password must contain a digit',
    },
    studentNames,
    teacherNames,
  }),
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