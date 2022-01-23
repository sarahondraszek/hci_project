<template>
  <div id="test">
    <h1 id="login-text">
      {{title}}
    </h1>

    <h2 id ="h2">Your Way into Space</h2>

    <form id="login-form" action="">
      <label for="fname">Username:</label><br>
      <input type="text" id="fname" name="fname" value="s4drock"><br>
      <label for="lname">Password:</label><br>
      <input type="text" id="lname" name="lname" value="************"><br><br>
      <input type="submit" value="Submit">
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  props: ["title"]
}


</script>

<style scoped>
#login-form {
  color: whitesmoke;
}

#h2 {
  color: #a6a6a6;
  background-color: #b05020;
}
  #test {
    background-color: #545454;

  }
  #login-text {
    color: white;
  }
</style>